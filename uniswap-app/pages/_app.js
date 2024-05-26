import '../styles/globals.css'
import '../components/Style.css'

// import merge from 'lodash.merge'
// import '@rainbow-me/rainbowkit/styles.css'
// import 'dotenv/config'

// import {
//   getDefaultConfig,
//   RainbowKitProvider,
//   midnightTheme,
//   getDefaultWallets,
// } from '@rainbow-me/rainbowkit'
// import { WagmiProvider, http } from 'wagmi'
// import { mainnet, polygon, optimism, arbitrum, sepolia } from 'wagmi/chains'
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// import {
//   argentWallet,
//   ledgerWallet,
//   trustWallet,
//   uniswapWallet,
// } from '@rainbow-me/rainbowkit/wallets'

// const { wallets } = getDefaultWallets()

// const projectId = '96376117668837e5de7eb66e0931eebb'
// const infuraId = '35e86f89b81d45a8a62ed9bb6ab1f3e6'

// const ganache = {
//   id: 1337,
//   name: 'Ganache',
//   iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
//   iconBackground: '#fff',
//   nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     default: { http: ['http://127.0.0.1:8545'] },
//   },
// }

// const chains = [mainnet, polygon, optimism, arbitrum, sepolia, ganache]

// const config = getDefaultConfig({
//   appName: 'Dexchange',
//   projectId,
//   chains,
//   transports: {
//     [mainnet.id]: http(`https://mainnet.infura.io/v3/${infuraId}`),
//     [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraId}`),
//     [ganache.id]: http('http://127.0.0.1:8545'),
//   },
//   wallets: [
//     ...wallets,
//     {
//       groupName: 'More',
//       wallets: [trustWallet, argentWallet, ledgerWallet, uniswapWallet],
//     },
//   ],
//   appUrl: 'https://dex-app-wheat.vercel.app/',
//   appDescription: 'A decentralized token exchange app',
// })

// const queryClient = new QueryClient()

// const myTheme = merge(midnightTheme(), {
//   colors: {
//     accentColor: '#18181b',
//     accentColorForeground: '#fff',
//   },
// })

// function MyApp({ Component, pageProps }) {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider theme={myTheme}>
//           <Component {...pageProps} />
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   )
// }

// export default MyApp

import { Web3OnboardProvider, init } from '@web3-onboard/react'
import metamaskSDK from '@web3-onboard/metamask'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import infinityWalletWalletModule from '@web3-onboard/infinity-wallet'

const INFURA_KEY = '35e86f89b81d45a8a62ed9bb6ab1f3e6'

const chains = [
  {
    id: 1,
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
  {
    id: 42161,
    token: 'ARB-ETH',
    label: 'Arbitrum One',
    rpcUrl: 'https://rpc.ankr.com/arbitrum',
  },
  {
    id: '0xa4ba',
    token: 'ARB',
    label: 'Arbitrum Nova',
    rpcUrl: 'https://nova.arbitrum.io/rpc',
  },
  {
    id: 137,
    token: 'MATIC',
    label: 'Matic Mainnet',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com',
  },
  {
    id: '0x2105',
    token: 'ETH',
    label: 'Base',
    rpcUrl: 'https://mainnet.base.org',
  },
  {
    id: 11155111,
    token: 'ETH',
    label: 'Sepolia',
    rpcUrl: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
  },
]

// initialize the module with options
const metamaskSDKWallet = metamaskSDK({
  options: {
    extensionOnly: false,
    dappMetadata: {
      name: 'DEXchange',
    },
  },
})

const wcInitOptions = {
  /**
   * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
   */
  projectId: '96376117668837e5de7eb66e0931eebb',
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  requiredChains: [1],
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  // optionalChains: [42161, 11155111, 137, '0x2105', '0xa4ba'],
  /**
   * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
   * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
   * To connect with WalletConnect
   */
  dappUrl: 'https://dex-app-wheat.vercel.app/',
}

// initialize the module with options
const walletConnect = walletConnectModule(wcInitOptions)
const infinityWalletSDK = infinityWalletWalletModule()

const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true })

const web3Onboard = init({
  wallets: [walletConnect, coinbaseWalletSdk, infinityWalletSDK],
  chains,
  appMetadata: {
    name: 'DEXchange',
    icon: '<svg>DEXchange</svg>',
    description:
      'DEXchange is a cryptocurrency exchange that allows to swap BTC and altcoins in an easy way. DiceSwap supports 1000 cryptocurrencies. Make Bitcoin to Ethereum, Litecoin crypto exchanges at the best rates!',
  },
  theme: 'dark',
})

function MyApp({ Component, pageProps }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Component {...pageProps} />
    </Web3OnboardProvider>
  )
}
export default MyApp
