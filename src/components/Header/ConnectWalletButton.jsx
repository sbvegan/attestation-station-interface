import { useConnect } from 'wagmi'
import styled from "styled-components";

const Button = styled.button`
  background-color: #ff0420;
  border: none;
  border-radius: 100px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  margin: 0 6px;
  outline: none;
  padding: 0 12px;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease;
  &:hover {
    cursor: pointer;
    background-color: rgb(235, 0, 26);
  }
`

const ConnectWalletButton = () => {

    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

    return(
      <>
        {connectors.map((connector) => (
          <Button
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
          >
              Connect with {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </Button>
        ))}
        {error && <div>{error.message}</div>}
      </>
    )
}

export default ConnectWalletButton;