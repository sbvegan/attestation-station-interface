import { useState } from "react";
import styled from "styled-components";
import { useNetwork, useSwitchNetwork } from 'wagmi'

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

const NetworkDropDownMenu = styled.div`
  background-color: #fff;
  border: 1px solid #cbd5e0;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 64px;
  span {
    box-sizing: border-box;
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
    line-height: 24px;
    padding: 16px 20px 8px 20px;
    width: 318px;
  }
`

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`

const MenuButton = styled.button`
  align-items: center;
  background-color: rgb(241, 244, 249);
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  justify-content: flex-start;
  line-height: 24px;
  padding: 12px 16px;
  margin: 0 0 8px 0;
`

const NetworkSwitcher = () => {
    const [showMenu, setShowMenu] = useState(false)

    const { chain } = useNetwork()
    const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()

    const handleSwitch = (id) => {
        switchNetwork?.(id)
        setShowMenu(!showMenu)
    }

    const networkDropDownMenu = 
        <NetworkDropDownMenu>
            <span>Network Switcher</span>
            <MenuItems>
                {chains.map((x) => (
                    <MenuButton
                        disabled={!switchNetwork || x.id === chain?.id}
                        key={x.id}
                        onClick={() => handleSwitch(x.id)}
                    >
                        {x.name}
                        {isLoading && pendingChainId === x.id && ' (switching)'}
                    </MenuButton>
                ))}
            </MenuItems>
        </NetworkDropDownMenu>
    

    return (
        <>
        {chain && <Button onClick={() => {setShowMenu(!showMenu)}}>{chain.name}</Button>}
        {showMenu ? networkDropDownMenu : <></>}
        <div>{error && error.message}</div>
      </>
    )

}

export default NetworkSwitcher;