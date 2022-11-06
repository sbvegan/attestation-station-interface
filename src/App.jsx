import styled from "styled-components";
import { 
  WagmiConfig,
  createClient,
  configureChains, 
  chain 
} from "wagmi"
import { publicProvider } from "wagmi/providers/public";

import NavBar from "./components/NavBar"

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
  provider,
  webSocketProvider
})

export default function App() {
  return (
    <WagmiConfig client={client}>
      <AppWrapper>
        <HeaderWrapper>
          <NavBar />
        </HeaderWrapper>
      </AppWrapper>
    </WagmiConfig>
  );
}
