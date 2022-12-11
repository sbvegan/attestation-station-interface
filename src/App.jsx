import React from 'react'
import styled from 'styled-components'

import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit'

import {
  chain,
  configureChains,
  createClient,
  WagmiConfig
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import Attestations from './components/Attestations'
import Header from './components/Header'

const AppWrapper = styled.div`
  background-color: #F1F4F9;
`

const BodyWrapper = styled.div`
  height: calc(100vh - 72px);
  width: 100%;
`

// todo: add mainnet when the contracts are deployed
const { chains, provider, webSocketProvider } = configureChains(
  [chain.optimism, chain.optimismGoerli],
  // [chain.optimismGoerli],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Attestation Station Interface',
  chains
})

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

export default function App () {
  return (
    <AppWrapper>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <Header />
          <BodyWrapper>
            <Attestations />
          </BodyWrapper>
          </RainbowKitProvider>
      </WagmiConfig>
    </AppWrapper>
  )
}
