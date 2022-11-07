import styled from "styled-components";
import {
    useAccount,
    useEnsName,
} from 'wagmi'

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

const AddressDisplayButton = () => {
    const { address } = useAccount()
    const { data: ensName } = useEnsName({ address })

    const shortenAddress = (address) => {
        const start = address.substring(0,6)
        const middle = "..."
        const end = address.substring(address.length - 4, address.length)
        return start + middle + end
    }

    return (
        <Button>
            {ensName ? `${ensName} (${shortenAddress(address)})` : shortenAddress(address)}
        </Button>
    )

}

export default AddressDisplayButton;