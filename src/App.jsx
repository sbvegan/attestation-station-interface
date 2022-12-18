import React, { useState } from 'react'
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

import Content from './components/Content'
import Header from './components/Header'

const AppWrapper = styled.div`
  background-color: #F1F4F9;
`

const ContentWrapper = styled.div`
  height: calc(100vh - 72px);
`

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
  const [activeContent, setActiveContent] = useState(0)

  return (
    <AppWrapper>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <Header
            activeContent={activeContent}
            setActiveContent={setActiveContent}
          />
          <ContentWrapper>
            <Content
              activeContent={activeContent}
              setActiveContent={setActiveContent}
            />
          </ContentWrapper>
        </RainbowKitProvider>
      </WagmiConfig>
    </AppWrapper>
  )
}
