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
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const HeaderWrapper = styled.div`
  height: 72px;
  width: 100%;
  box-shadow: rgba(20, 23, 26, 0.06) 0px 6px 8px -6px, rgba(20, 23, 26, 0.04) 0px 8px 16px -6px;
`

const BodyWrapper = styled.div`
  background-color: #f1f4f9;
  height: calc(100vh - 72px);
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
    <AppWrapper>
        <WagmiConfig client={client}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          hi
        </BodyWrapper>
    </WagmiConfig>
      </AppWrapper>
  );
}
