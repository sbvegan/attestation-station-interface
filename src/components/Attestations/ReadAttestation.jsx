import styled from "styled-components";

const AttestForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
`

const FormLabel = styled.label`
  box-sizing: border-box;
  color: rgb(32,35,39);
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 600;
`

const Input = styled.input`
  align-items: center;
  border: 1px solid #cbd5e0;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 8px 0;
  outline-style: none;
  padding: 9px 12px;
  width: 420px;
`

const SubmitButton = styled.button`
  background-color: #ff0420;
  border: none;
  border-radius: 12px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  width: 100%;
  margin-top: 16px;
  padding: 0 24px;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: rgb(235, 0, 26);
  }
`

const ReadAttestation = () => {
    return (
        <AttestForm>
            <FormLabel>Creator's ETH address</FormLabel>
            <Input type="text" placeholder="Who's this attestation about?"/>
            <FormLabel>Subject's ETH address</FormLabel>
            <Input type="text" placeholder="Who's this attestation about?"/>
            <FormLabel>Attestation key</FormLabel>
            <Input type="text" placeholder="Attestation key" />
            <SubmitButton>Read attestation</SubmitButton>
        </AttestForm>
    )
}

export default ReadAttestation;