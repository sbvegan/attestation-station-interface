/* eslint-disable react/prop-types */
import React from 'react'
import NewAttestation from '../NewAttestation'
import ReadAttestation from '../ReadAttesatation'
import About from '../About'

const AttestationFormContent = (props) => {
  switch (props.active) {
    case 0:
      return <NewAttestation />
    case 1:
      return <ReadAttestation />
    case 2:
      return <About />
    default:
      return <div>How&apos;d you get here???</div>
  }
}

export default AttestationFormContent
