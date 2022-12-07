import React from 'react'

import styled from 'styled-components'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  height: 69px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
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
            <Title>ATTESTATIONSTATION <TitleAccent>INTERFACE</TitleAccent></Title>
            <ConnectButton />
        </Nav>
  )
}

export default Header
