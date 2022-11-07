import styled from "styled-components";
import { 
  WagmiConfig,
  createClient,
  configureChains, 
  chain 
} from "wagmi"
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { publicProvider } from "wagmi/providers/public";

import Header from "./components/Header"

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const HeaderWrapper = styled.div`
  width: 100%;
`

// todo: add additional providers to avoid rate limiting
const { chains, provider, webSocketProvider } = configureChains(
  [chain.optimism, chain.optimismGoerli],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: 'wagmi',
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     qrcode: true,
    //   },
    // }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: 'Injected',
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  provider,
  webSocketProvider
})

export default function App() {
  return (
    <WagmiConfig client={client}>
      <AppWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </AppWrapper>
    </WagmiConfig>
  );
}
