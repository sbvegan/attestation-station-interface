import styled from "styled-components";
import optimismRed from "../../assets/svg/OPTIMISM-R.svg";

import { ConnectButton } from "@rainbow-me/rainbowkit";


const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  height: 72px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
`

const Header = () => {
    return(
        <Nav>
            <img src={optimismRed} alt="Optimism" />
            <ConnectButton />
        </Nav>
    )
}

export default Header;