import '../styles/globals.css'
import '../components/Style.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit'

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.sepolia, chain.arbitrum, chain.optimism, chain.polygon],
  [
    infuraProvider({
      apiKey: '35e86f89b81d45a8a62ed9bb6ab1f3e6',
      priority: 1,
    }),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://sepolia.infura.io/v3/35e86f89b81d45a8a62ed9bb6ab1f3e6`,
        webSocket:
          'wss://sepolia.infura.io/ws/v3/35e86f89b81d45a8a62ed9bb6ab1f3e6',
      }),
    }),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Custom Dex',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: '#18181b',
    accentColorForeground: '#fff',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
