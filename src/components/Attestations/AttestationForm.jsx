/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import AttestationFormContent from './AttestationFormContent'

const AttestationFormWrapper = styled.div`
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgba(20, 23, 26, 0.12) 0px 0px 8px -4px, rgba(20, 23, 26, 0.08) 0px 4px 16px -1px;
  display: flex;
  flex-direction: column;
  padding: 36px;
  width: 552px;
`

const AttestationForm = (props) => {
  console.log(props.activeContent)
  return (
        <AttestationFormWrapper>
          <AttestationFormContent active={props.activeContent} />
        </AttestationFormWrapper>
  )
}

export default AttestationForm
