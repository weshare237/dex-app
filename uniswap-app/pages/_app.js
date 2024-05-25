import '../styles/globals.css'
import '../components/Style.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'
import 'dotenv/config'

import {
  getDefaultConfig,
  RainbowKitProvider,
  midnightTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider, http } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, sepolia } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import {
  argentWallet,
  ledgerWallet,
  trustWallet,
  uniswapWallet,
} from '@rainbow-me/rainbowkit/wallets'

const { wallets } = getDefaultWallets()

const projectId = '96376117668837e5de7eb66e0931eebb'
const infuraId = '35e86f89b81d45a8a62ed9bb6ab1f3e6'
const chains = [mainnet, polygon, optimism, arbitrum, sepolia]

const config = getDefaultConfig({
  appName: 'Dexchange',
  projectId,
  chains,
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${infuraId}`),
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraId}`),
  },
  wallets: [
    ...wallets,
    {
      groupName: 'More',
      wallets: [trustWallet, argentWallet, ledgerWallet, uniswapWallet],
    },
  ],
  appUrl: 'https://dex-app-wheat.vercel.app/',
  appDescription: 'A decentralized token exchange app',
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
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default MyApp
