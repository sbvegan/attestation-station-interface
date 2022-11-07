import styled from "styled-components";
import { useDisconnect } from 'wagmi'

const Button = styled.button`
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid #cbd5e0;
  border-radius: 100px;
  box-sizing: border-box;
  color: rgb(74, 85, 104);
  font-size: 14px;
  height: 40px;
  margin: 0 6px;
  outline: none;
  padding: 0 12px;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease;
  &:hover {
    background-color: #f1f4f9;
    border: 1px solid #a9b9cc;
    cursor: pointer;
  }
`

const DisconnectButton = () => {

    const { disconnect } = useDisconnect()

    return (
        <Button onClick={disconnect}>
            Disconnect Wallet
        </Button>
    )
}

export default DisconnectButton;