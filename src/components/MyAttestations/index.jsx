import React, { useState } from 'react'
import { H2, Body16Medium } from '../OPStyledTypography'
import styled from 'styled-components'
import PillTab from '../OPStyledTwoPillTabs'
import Attestations from '../Attestations'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 80%;
`

const AttestationCount = styled(Body16Medium)`
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #68778D;
  margin: 0;
  padding: 20px 0 20px 0;
`

const MyAttestations = () => {
  const [activeTab, setActiveTab] = useState(0)

  // todo: retrieve the user's address
  // todo: retrieve the attestations associated with the address
  // todo: add address to the top of the content
  // todo: handle the case when the wallet isn't connected
  // todo: add attestation components: key, value, timestamp, addresses
  // todo: add full attestation details
  const tabs = [
    {
      label: 'Received'
    },
    {
      label: 'Sent'
    }
  ]

  const attestations = []

  return (
    <Main>
      <H2>0xtodoaddtheconnectedwalletaddress attestations</H2>
      <PillTab
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <AttestationCount># Attestations</AttestationCount>
      <Attestations attestations={attestations}/>
    </ Main>
  )
}

export default MyAttestations
