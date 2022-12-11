/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import AttestationForm from './AttestationForm'

const AttestationsFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`

const Attestations = (props) => {
  return (
        <AttestationsFormContainer>
            <AttestationForm
              activeContent={props.activeContent}
            />
        </AttestationsFormContainer>
  )
}

export default Attestations
