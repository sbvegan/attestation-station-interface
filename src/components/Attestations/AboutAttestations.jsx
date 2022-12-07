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
const Bold = styled.span`
  font-weight: bold;
`

const AboutAttestations = () => {
  return (
    <AboutContainer>
        <SubSection>What&apos;s the AttestationStation?</SubSection>
        <Text>
          The AttestationStation is an <Bold>attestation smart contract </Bold>
          deployed on Optimism. It enables anyone to make arbitrary attestations
          about other addresses.
        </Text>

        <SubSection>What&apos;s the AttestationStation Interface?</SubSection>
        <Text>
          A <Bold>no-code open source solution to start making your own attestations </Bold>
          from your favorite soyboy (: If you&apos;d like to make a contribution or
          report an issue; please head over to the&nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sbvegan/attestation-station-interface"
          >
            Github repository
          </Link>.
        </Text>

        <SubSection>Okay, but why?</SubSection>
        <Text>
          Ultimately the goal for the AttestationStation is <Bold>to serve as an accessible data
          source for builders creating reputation related apps</Bold>. It can be used for a wide
          variety of applications including voting, reputations, reviews, and more.
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
