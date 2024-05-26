import React, { useState } from 'react'
import { Input, Popover, Radio, Modal } from 'antd'
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from '@ant-design/icons'

import tokenList from './tokenList.json'
import uniRouter from './UniRouter.json'
import { ethers } from 'ethers'
import TransactionModal from 'react-modal'
import { useRouter } from 'next/router'
import TransactionLoader from './TransactionLoader'

TransactionModal.setAppElement('#__next')

// Transaction Loader
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

function SwapComponent() {
  const [slippage, setSlippage] = useState(2.5)
  const [tokenOneAmount, setTokenOneAmount] = useState(null)
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null)
  const [tokenOne, setTokenOne] = useState(tokenList[4])
  const [tokenTwo, setTokenTwo] = useState(tokenList[1])
  const [isOpen, setIsOpen] = useState(false)
  const [changeToken, setChangeToken] = useState(1)
  const [prices, setPrices] = useState(null)
  const [oneN, setOneN] = useState()
  const INFURA_ID = '35e86f89b81d45a8a62ed9bb6ab1f3e6'

  // const account = useAccount()
  const router = useRouter()
  // const { data: hash, sendTransaction, isPending } = useSendTransaction()

  // const { isLoading: isConfirming, isSuccess: isConfirmed } =
  //   useWaitForTransactionReceipt({
  //     hash,
  //   })

  // const result = useWalletClient({
  //   account: account.address,
  // })

  // const balance = useBalance({
  //   address: account.address,
  // })

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   console.log(balance)

  //   const to = '0x57FC11de04Fb355D185BaFCfaF887E09AC379337'
  //   const value = '0.1'
  //   const nonce = 0

  //   const tx = {
  //     nonce: ethers.utils.hexlify(nonce),
  //     gasPrice: '0x7EF40',
  //     gasLimit: '0x7EF40',
  //     to: to,
  //     value: parseEther(value),
  //     data: '0x',
  //   }

  //   const rawTransaction = rlp.encode([
  //     tx.nonce,
  //     tx.gasPrice,
  //     tx.gasLimit,
  //     tx.to,
  //     tx.value,
  //     tx.data,
  //   ])

  //   const msgHash = ethers.utils.keccak256(rawTransaction)

  //   try {
  //     const signature = await result.data.signMessage({
  //       message: { raw: ethers.utils.arrayify(msgHash) },
  //       account: account.address,
  //     })

  //     const { r, s, v } = ethers.utils.splitSignature(signature)

  //     const signedTx = ethers.utils
  //       .serializeTransaction(tx, { v, r, s })
  //       .toString('hex')

  //     console.log(signedTx)

  //     await result.data.sendTransaction(tx)
  //   } catch (error) {
  //     console.error('Error signing and sending transaction', error)
  //   }
  // }

  /**
   *
   * grief impulse kit order expect poem gravity auction bulb detail drill debate
   */

  async function fetchPairAndCalculateAmount(
    tokenOneAddress,
    tokenTwoAddress,
    tokenOneAmount
  ) {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_ID}`
    )
    const uniswapRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

    try {
      const uniswapRouter = new ethers.Contract(
        uniswapRouterAddress,
        uniRouter,
        provider
      )

      const amountIn = ethers.utils.parseUnits(
        `${tokenOneAmount}`,
        `${tokenOne.decimals}`
      )
      const path = [tokenOneAddress, tokenTwoAddress]
      const amount = await uniswapRouter.getAmountsOut(amountIn, path)

      const one_eth = ethers.utils.parseUnits('1', `${tokenOne.decimals}`)
      const set_eth = await uniswapRouter.getAmountsOut(one_eth, path)

      setTokenTwoAmount(
        parseFloat(
          ethers.utils.formatUnits(amount[1], `${tokenTwo.decimals}`)
        ).toFixed(2)
      )
      setOneN(
        parseFloat(
          ethers.utils.formatUnits(set_eth[1], `${tokenTwo.decimals}`)
        ).toFixed(6)
      )
    } catch (error) {
      console.error('Error fetching pair and calculating amount:', error)
    }
  }

  function changeAmount(e) {
    setTokenOneAmount(e.target.value)
    if (e.target.value) {
      fetchPairAndCalculateAmount(
        tokenOne.address,
        tokenTwo.address,
        e.target.value
      )
    } else {
      setTokenTwoAmount(null)
    }
  }

  function handleSlippageChange(e) {
    setSlippage(e.target.value)
  }

  function switchTokens() {
    setPrices(null)
    setTokenOneAmount(null)
    setTokenTwoAmount(null)
    const one = tokenOne
    const two = tokenTwo
    setTokenOne(two)
    setTokenTwo(one)
  }

  function openModal(asset) {
    setChangeToken(asset)
    setIsOpen(true)
  }

  function modifyToken(i) {
    setPrices(null)
    setTokenOneAmount(null)
    setTokenTwoAmount(null)
    if (changeToken === 1) {
      setTokenOne(tokenList[i])
    } else {
      setTokenTwo(tokenList[i])
    }
    setIsOpen(false)
  }

  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  )

  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title='Select a token'
      >
        <div className='modalContent'>
          {tokenList?.map((e, i) => {
            return (
              <div
                className='tokenChoice'
                key={i}
                onClick={() => modifyToken(i)}
              >
                <img src={e.img} alt={e.ticker} className='tokenLogo' />
                <div className='tokenChoiceNames'>
                  <div className='tokenName'>{e.name}</div>
                  <div className='tokenTicker'>{e.ticker}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Modal>

      <div className='tradeBox'>
        <div className='tradeBoxHeader mb-2'>
          <h4>Swap</h4>
          <Popover
            content={settings}
            title='Settings'
            trigger='click'
            placement='bottomRight'
          >
            <SettingOutlined className='cog' />
          </Popover>
        </div>
        <div className='inputs'>
          <Input
            type='number'
            placeholder='0'
            value={tokenOneAmount}
            onChange={changeAmount}
          />
          <Input
            type='number'
            placeholder='0'
            value={tokenTwoAmount}
            disabled={true}
          />
          <div className='switchButton' onClick={switchTokens}>
            <ArrowDownOutlined className='switchArrow' />
          </div>
          <div className='assetOne' onClick={() => openModal(1)}>
            <img src={tokenOne.img} alt='assetOneLogo' className='assetLogo' />
            {tokenOne.ticker}
            <DownOutlined />
          </div>
          <div className='assetTwo' onClick={() => openModal(2)}>
            <img src={tokenTwo.img} alt='assetOneLogo' className='assetLogo' />
            {tokenTwo.ticker}
            <DownOutlined />
          </div>
        </div>
        {tokenOneAmount !== null &&
          tokenOneAmount !== '0' &&
          tokenOneAmount.trim() !== '' && (
            <div className='calculate'>
              {tokenTwoAmount !== null
                ? `1 ${tokenOne.ticker} = ${oneN} ${tokenTwo.ticker}`
                : 'Calculating price...'}
            </div>
          )}
        {/* {account.address ? (
          <>
            <div
              className='swapButton'
              disabled={!tokenOneAmount || isPending}
              onClick={handleSubmit}
            >
              {isPending ? 'Swapping...' : 'Swap'}
            </div>
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
          </>
        ) : (
          <div className='mx-auto p-2'>
            <ConnectButton />
          </div>
        )} */}
        <div className='swapButton' disabled={!tokenOneAmount}>
          Swap
        </div>
      </div>
      <TransactionModal isOpen={!!router.query.loading} style={customStyles}>
        <TransactionLoader />{' '}
      </TransactionModal>
    </>
  )
}

export default SwapComponent
