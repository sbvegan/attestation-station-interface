import React from 'react'

import styled from 'styled-components'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Nav = styled.nav`
  background: #FFFFFF;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // flex-wrap: nowrap;
  // align-items: center;
  // padding: 0px 24px;
`

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 32px;
`

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 32px 0px 0px;
  gap: 52px;
`

const Title = styled.h1`
  font-family: Rubik;
  font-style: italic;
  font-weight: 700;
  color: rgb(255, 4, 32);
  letter-spacing: .1rem;
`
const TitleAccent = styled.span`
  color: black;
  font-weight: 400;
`

const Header = () => {
  return (
        <Nav>
            <Left>
              <Title>ATTESTATIONSTATION <TitleAccent>INTERFACE</TitleAccent></Title>
            </Left>
            <Right>
              <ConnectButton
                accountStatus="avatar"
                chainStatus="icon"
                showBalance={false}
              />
            </Right>
        </Nav>
  )
}

export default Header
