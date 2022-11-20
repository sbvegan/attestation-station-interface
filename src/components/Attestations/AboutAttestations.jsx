import styled from "styled-components";

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

// TODO: provide more helpful information

const AboutAttestations = () => {
    return (
        <AboutContainer>
            <SubSection>What's this?</SubSection>
            <Text>An open-source interface for the Attestation Station.</Text>
            <SubSection>What's the Attestation Station?</SubSection>
            <Text>The Attestation Station is a smart contract deployed on Optimism. It allows anyone to make arbitrary attestations about</Text>
            <SubSection>Why?</SubSection>
            <Text>To build out a reputation and identity layer on-chain.</Text>
            <SubSection>Learn more</SubSection>
            <Text>TODO: add links</Text>
        </AboutContainer>
    )
}

export default AboutAttestations;