import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
} from 'wagmi'
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
    const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()

    const handleConnect = () => {
        console.log("Click")
    }

    if (isConnected) {
        return (
            <div>
            <img src={ensAvatar} alt="ENS Avatar" />
            <div>{ensName ? `${ensName} (${address})` : address}</div>
            <div>Connected to {connector.name}</div>
            <button onClick={disconnect}>Disconnect</button>
            </div>
        )
    }

    // todo: refactor into a modal and integrate the connect wallet button

    return(
        <div>
            {connectors.map((connector) => (
                <button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {isLoading &&
                    connector.id === pendingConnector?.id &&
                    ' (connecting)'}
                </button>
            ))}
            {error && <div>{error.message}</div>}
            <Button onClick={handleConnect}>
                Connect Wallet
            </Button>
        </div>
    )
}

export default ConnectWalletButton;