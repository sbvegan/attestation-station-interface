import optimismRed from "../../assets/svg/OPTIMISM-R.svg";

import { useAccount } from 'wagmi'
import styled from "styled-components";

import ConnectWalletButton from "./ConnectWalletButton";
import AccountInfo from "./AccountInfo";

const Nav = styled.nav`
  height: 72px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
`

const LeftSection = styled.section`
  box-sizing: border-box;
  color: rgb(255, 4, 32);
  font-family: Rubik, sans-serif;
  font-size: 28px;
  font-style: italic;
  font-weight: 700;
`

const RightSection = styled.section`
`

const Header = () => {
    const { isConnected } = useAccount()

    return(
        <Nav>
            <LeftSection>
                <img src={optimismRed} alt="Optimism" />
            </LeftSection>
            
            <RightSection>
                {isConnected ? 
                    <AccountInfo /> 
                    : 
                    <ConnectWalletButton />
                }
            </RightSection>
        </Nav>
    )
}

export default Header;