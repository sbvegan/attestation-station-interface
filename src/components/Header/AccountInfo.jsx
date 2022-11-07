import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
} from 'wagmi'

const AccountInfo = () => {
    const { address, connector, isConnected } = useAccount()

    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()

    return (
        <div>
            <div>{ensName ? `${ensName} (${address})` : address}</div>
            <button onClick={disconnect}>Disconnect</button>
        </div>
    )

}

export default AccountInfo;