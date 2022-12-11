/* eslint-disable react/prop-types */
import React from 'react'

import styled from 'styled-components'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Nav = styled.nav`
  background: #FFFFFF;
  box-shadow: 0px 6px 8px -6px rgba(20, 23, 26, 0.06), 0px 8px 16px -6px rgba(20, 23, 26, 0.04);
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  gap: 32px;
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

const Link = styled.a`
  cursor: pointer;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #68778D;

  ${({ active }) => active && `
    color: #202327;
    border-bottom: 3px solid #FF0420;
    border-radius: 100px 100px 0px 0px;
  `}
`

const Header = (props) => {
  return (
    <Nav>
      <Left>
        <Title>ATTESTATIONSTATION <TitleAccent>INTERFACE</TitleAccent></Title>
      </Left>

      <Right>
        <Link
          active={props.activeContent === 0}
          onClick={() => props.setActiveContent(0)}
        >
          New attesation
        </Link>
        <Link
          active={props.activeContent === 1}
          onClick={() => props.setActiveContent(1)}
        >
          Read attestation
        </Link>
        <Link
          active={props.activeContent === 2}
          onClick={() => props.setActiveContent(2)}
        >
          About
        </Link>
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
