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
  background-color: #fff;
`

const HeaderWrapper = styled.div`
  height: 69px;
  width: 100%;
  box-shadow: rgba(20, 23, 26, 0.06) 0px 6px 8px -6px, rgba(20, 23, 26, 0.04) 0px 8px 16px -6px;
`

const BodyWrapper = styled.div`
  height: calc(100vh - 72px);
  width: 100%;
`

// todo: add additional providers to avoid rate limiting
const { chains, provider, webSocketProvider } = configureChains(
  [chain.optimism, chain.optimismGoerli],
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
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Attestations />
          </BodyWrapper>
          </RainbowKitProvider>
      </WagmiConfig>
    </AppWrapper>
  )
}
