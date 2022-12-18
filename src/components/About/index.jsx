import React from 'react'

import styled from 'styled-components'

import { H2, Body14, Body14Bold } from '../OPStyledTypography'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
  width: 420px;
`

const SubSection = styled(Body14Bold)`
  margin: 0;
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
      <H2>About</H2>
      <SubSection>What&apos;s the AttestationStation?</SubSection>
      <Body14>
        The AttestationStation is an <Bold>attestation smart contract </Bold>
        deployed on Optimism. It enables anyone to make arbitrary attestations
        about other addresses.
      </Body14>

      <SubSection>What&apos;s the AttestationStation Interface?</SubSection>
      <Body14>
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
      </Body14>

      <SubSection>Okay, but why?</SubSection>
      <Body14>
        Ultimately the goal for the AttestationStation is <Bold>to serve as an accessible data
        source for builders creating reputation related apps</Bold>. It can be used for a wide
        variety of applications including voting, reputations, reviews, and more.
      </Body14>

      <SubSection>Learn more</SubSection>
      <Body14>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://community.optimism.io/docs/governance/attestation-station/#"
        >
            Official Optimism Documentation
        </Link>
      </Body14>
    </AboutContainer>
  )
}

export default AboutAttestations
