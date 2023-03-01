/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Body16Medium, Body16Grey } from '../OPStyledTypography'

const AttestationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const AttestationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(32, 35, 39, 0.16), 0px 4px 8px rgba(32, 35, 39, 0.04), 0px 8px 48px rgba(32, 35, 39, 0.02);
  border-radius: 16px;
`

const AttestationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const Left = styled.div`
  width: 60%;
  display: flex;
`

const Key = styled.div`
  width: 50%;
`

const Value = styled.div`
  width: 50%;
`

const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`

const Timestamp = styled.div``

const Address = styled.div``

// todo: refactor attestations into their own component
// todo: add function to shorten addresses
// todo: add onclick to expand full details

const Attestations = (props) => {
  return (
    <AttestationsContainer>
      {props.attestations.map((attestation, index) => (
        <AttestationCard key={index}>
          <AttestationContent>
            <Left>
              <Key>
                <Body16Medium>{attestation.keyUTF}</Body16Medium>
              </Key>
              <Value>
                <Body16Medium>{attestation.valueUTF}</Body16Medium>
              </Value>
            </Left>
            <Right>
              <Timestamp>
                <Body16Grey>{attestation.timestamp}</Body16Grey>
              </Timestamp>
              <Address>
                <Body16Grey>{attestation.creator}</Body16Grey>
              </Address>
            </Right>
          </AttestationContent>
        </AttestationCard>
      ))}
    </AttestationsContainer>
  )
}

export default Attestations
