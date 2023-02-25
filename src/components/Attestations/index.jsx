/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Body16Medium } from '../OPStyledTypography'

const AttestationsContainer = styled.div``

const Attestation = styled.div``

const Attestations = (props) => {
  return (
    <AttestationsContainer>
      {props.attestations.map((attestation, index) => (
        <Attestation key={index}>
          <Body16Medium>{attestation}</Body16Medium>
          <Body16Medium>{attestation}</Body16Medium>
          <Body16Medium>{attestation}</Body16Medium>
          <Body16Medium>{attestation}</Body16Medium>
        </Attestation>
      ))}
    </AttestationsContainer>
  )
}

export default Attestations
