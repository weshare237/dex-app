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
// const chains = [mainnet, polygon, optimism, arbitrum, sepolia]

// const config = getDefaultConfig({
//   appName: 'Dexchange',
//   projectId,
//   chains,
//   transports: {
//     [mainnet.id]: http(`https://mainnet.infura.io/v3/${infuraId}`),
//     [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraId}`),
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

import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

const infuraId = '35e86f89b81d45a8a62ed9bb6ab1f3e6'

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, sepolia],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(`https://mainnet.infura.io/v3/${infuraId}`),
      [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraId}`),
    },

    // Required API Keys
    walletConnectProjectId: '96376117668837e5de7eb66e0931eebb',

    // Required App Info
    appName: 'Your App Name',

    // Optional App Info
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB),
  })
)

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme='midnight'>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default MyApp
