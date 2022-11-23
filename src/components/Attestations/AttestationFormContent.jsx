/* eslint-disable react/prop-types */
import React from 'react'
import Attest from './Attest'
import ReadAttestation from './ReadAttestation'
import AboutAttestations from './AboutAttestations'

const AttestationFormContent = (props) => {
  switch (props.active) {
    case 0:
      return <Attest />
    case 1:
      return <ReadAttestation />
    case 2:
      return <AboutAttestations />
    default:
      return <div>How&apos;d you get here???</div>
  }
}

export default AttestationFormContent
