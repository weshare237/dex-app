import '../styles/globals.css'
import '../components/Style.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultConfig,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, sepolia } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { TransactionProvider } from '../context/TransactionContext'

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '96376117668837e5de7eb66e0931eebb',
  chains: [mainnet, polygon, optimism, arbitrum, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
})

const queryClient = new QueryClient()

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: '#18181b',
    accentColorForeground: '#fff',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <TransactionProvider>
            <Component {...pageProps} />
          </TransactionProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default MyApp
