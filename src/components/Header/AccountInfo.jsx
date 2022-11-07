import styled from "styled-components";

import AddressDisplay from "./AddressDisplay";
import DisconnectButton from './DisconnectButton'
import NetworkSwitcher from "./NetworkSwitcher";

const AccountInfoWrapper = styled.div`
  height: 72px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
`

const AccountInfo = () => {
    return (
        <AccountInfoWrapper>
            <NetworkSwitcher />
            <AddressDisplay />
            <DisconnectButton />
        </AccountInfoWrapper>
    )

}

export default AccountInfo;