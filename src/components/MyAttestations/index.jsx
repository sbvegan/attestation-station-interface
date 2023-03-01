import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import { H2, Body16Medium } from '../OPStyledTypography'
import styled from 'styled-components'
import PillTab from '../OPStyledTwoPillTabs'
import Attestations from '../Attestations'
import { shortenEthereumAddress } from '../../utils'

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
  const { address, isConnected } = useAccount()
  const [activeTab, setActiveTab] = useState(0)

  // todo: retrieve the attestations associated with the address
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

  const attestations = [
    {
      hash: '0x9a24de656d4b7b9b5b57735eb31b2c1568575ad08432fbc81b4673862ab79526',
      creator: '0xd34a...1fa2',
      about: '0xd34a...1fa2',
      timestamp: 'Feb-17-2023',
      keyUTF: 'key',
      keyBytes: '0x74696d654372656174656454776974746572',
      valueUTF: 'Value UTF',
      valueBytes: '0x323032312d30342d3139'
    },
    {
      hash: '0x9a24de656d4b7b9b5b57735eb31b2c1568575ad08432fbc81b4673862ab79526',
      creator: '0xd34a...1fa2',
      about: '0xd34a...1fa2',
      timestamp: 'Feb-17-2023',
      keyUTF: 'key but longer',
      keyBytes: '0x74696d654372656174656454776974746572',
      valueUTF: 'Value UTF',
      valueBytes: '0x323032312d30342d3139'
    },
    {
      hash: '0x9a24de656d4b7b9b5b57735eb31b2c1568575ad08432fbc81b4673862ab79526',
      creator: '0xd34a...1fa2',
      about: '0xd34a...1fa2',
      timestamp: 'Feb-17-2023',
      keyUTF: 'key',
      keyBytes: '0x74696d654372656174656454776974746572',
      valueUTF: 'Value but longer',
      valueBytes: '0x323032312d30342d3139'
    }
  ]

  return (
    <Main>
      {isConnected
        ? <>
          <H2>Attestations for {shortenEthereumAddress(address)}</H2>
          <PillTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <AttestationCount># Attestations</AttestationCount>
          <Attestations attestations={attestations}/>
        </>
        : <H2>Please connect wallet.</H2>
      }
    </ Main>
  )
}

export default MyAttestations
