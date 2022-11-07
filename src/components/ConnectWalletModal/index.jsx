import { useConnect } from 'wagmi'
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const ConnectWalletModal = () => {

    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

    return(
        <Modal>
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
        </Modal>
    )
}

export default ConnectWalletModal;