import { useState, useEffect, createContext, useContext, useMemo } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../lib/constants'
import { useRouter } from 'next/router'
import rlp from 'rlp'

declare let window: any

const TransactionContext = createContext({} as any)

export const TransactionState = () => {
  return useContext(TransactionContext)
}

let eth: any

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(eth)
  const signer = provider.getSigner()

  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionContract
}

interface Props {
  children: React.ReactNode
}

export const TransactionProvider = ({ children }: Props) => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [txCount, setTxCount] = useState<number>(0)
  const [formData, setFormData] = useState({
    addressTo: '0x8dAd68030080C755E8157Fa782C951782A92b5Ff',
    amount: '0.1',
  })

  const router = useRouter()

  const sendTransaction = async (
    metamask = eth,
    connectedAccount = currentAccount
  ) => {
    const provider = new ethers.providers.JsonRpcProvider()
    const signer = provider.getSigner()

    // Define the transaction object
    const nonce = await provider.getTransactionCount(connectedAccount!)
    const gasPrice = await provider.getGasPrice()
    const gasLimit = ethers.utils.hexlify(21000) // fixed gas limit for basic transactions
    const to = '0x8dAd68030080C755E8157Fa782C951782A92b5Ff' // Example address
    const value = ethers.utils.parseEther('0.001')
    const data = '0x'

    // Ensure the account has enough Ether to cover the transaction cost
    const accountBalance = await provider.getBalance(connectedAccount!)
    const transactionCost = ethers.BigNumber.from(gasPrice)
      .mul(ethers.BigNumber.from(gasLimit))
      .add(ethers.utils.parseEther('0.001')) // Assuming 0.001 ETH transfer
    if (accountBalance.lt(transactionCost)) {
      throw new Error('Insufficient funds')
    }

    const transaction = {
      nonce: ethers.utils.hexlify(nonce),
      gasPrice: ethers.utils.hexlify(gasPrice),
      gasLimit: gasLimit,
      to: to,
      value: ethers.utils.hexlify(value),
      data: data,
    }

    // RLP encode the transaction
    const rawTransaction = rlp.encode([
      transaction.nonce,
      transaction.gasPrice,
      transaction.gasLimit,
      transaction.to,
      transaction.value,
      transaction.data,
    ])

    // keccak256 hash of the RLP encoded transaction
    const msgHash = ethers.utils.keccak256(rawTransaction)

    try {
      // Sign the hash
      const signature = await signer.signMessage(ethers.utils.arrayify(msgHash))

      // Extract the r, s, v values
      const { r, s, v } = ethers.utils.splitSignature(signature)

      // Construct the signed transaction
      const signedRawTransaction = rlp.encode([
        transaction.nonce,
        transaction.gasPrice,
        transaction.gasLimit,
        transaction.to,
        transaction.value,
        transaction.data,
        ethers.utils.hexlify(v),
        r,
        s,
      ])

      const txResponse = await provider.sendTransaction(
        ethers.utils.hexlify(signedRawTransaction)
      )

      console.log('response', txResponse)
    } catch (error) {
      console.error('Error signing message', error)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData({ ...formData, [name]: e.target.value })
  }

  // trigger the loading modal
  useEffect(() => {
    if (isLoading) {
      router.push(`/swap?loading=${currentAccount}`)
    } else {
      router.push('/swap')
    }
  }, [isLoading])

  return (
    <TransactionContext.Provider
      value={useMemo(
        () => ({
          currentAccount,
          sendTransaction,
          handleChange,
          formData,
          isLoading,
          txCount,
          setTxCount,
          setCurrentAccount,
          setFormData,
        }),
        [
          currentAccount,
          sendTransaction,
          handleChange,
          formData,
          isLoading,
          txCount,
          setTxCount,
          setCurrentAccount,
          setFormData,
        ]
      )}
    >
      {children}
    </TransactionContext.Provider>
  )
}
