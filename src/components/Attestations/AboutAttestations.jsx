import React from 'react'

import styled from 'styled-components'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
  width: 420px;
`

const SubSection = styled.p`
  box-sizing: border-box;
  color: rgb(32,35,39);
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin: 0;
`

const Text = styled.p`

`

const Link = styled.a`
  color: #f01a37;
`

// TODO: provide more helpful information

const AboutAttestations = () => {
  return (
    <AboutContainer>
        <SubSection>What&apos;s this?</SubSection>
        <Text>
          An open-source interface for the Attestation Station. If you&apos;d like to make a contribution or report an issue; please head over to the&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sbvegan/attestation-station-interface"
          >
            Github repository
          </Link>
        </Text>

        <SubSection>What&apos;s the Attestation Station?</SubSection>
        <Text>
          The Attestation Station is a smart contract deployed on Optimism. It allows anyone to make arbitrary attestations about Ethereum addresses.
        </Text>

        <SubSection>Why?</SubSection>
        <Text>
          Attestations can be used for a wide variety of applications including voting, reputations scores, reviews, and more. As an example, attestations written to the AttestationStation form the base layer of reputation for the&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://community.optimism.io/docs/governance/citizens-house/"
          >
            Optimism Citizen House
          </Link>
        </Text>
        <SubSection>Learn more</SubSection>
        <Text>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://community.optimism.io/docs/governance/attestation-station/#"
          >
              Official Optimism Documentation
          </Link>
        </Text>
    </AboutContainer>
  )
}

export default AboutAttestations
