import { useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { useContractRead } from "wagmi";
import { AttestationStationOptimismGoerliAddress } from "../../constants/addresses";
import AttestationStationABI from "../../constants/abi.json"

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

/**
 * TODO:
 *  - input validation
 *  - helper tooltips
 *  - error handling
 *  - user feedback
 *  - handle optimism mainnet and testnet switching
 *  - use keccack256 for the key and go along with the attestation convention
 */

const ReadAttestation = () => {

  const [creator, setCreator] = useState("")
  const [about, setAbout] = useState("")
  const [key, setKey] = useState("")
  const [bytes32Key, setBytes32Key] = useState("")

  const { data, isError, isLoading } = useContractRead({
    address: AttestationStationOptimismGoerliAddress,
    abi: AttestationStationABI,
    functionName: "attestations",
    args: [creator, about, bytes32Key],
    enabled: Boolean(creator) && Boolean(about) && Boolean(bytes32Key)
  })

  return (
    <AttestForm>
      <FormLabel>Creator's ETH address</FormLabel>
      <Input 
        type="text" 
        placeholder="Who created this attestation?"
        onChange={(e) => setCreator(e.target.value)}
        value={creator}
      />
      <FormLabel>Subject's ETH address</FormLabel>
      <Input 
        type="text" 
        placeholder="Who's this attestation about?"
        onChange={(e) => setAbout(e.target.value)}
        value={about}
      />
      <FormLabel>Attestation key</FormLabel>
      <Input 
        type="text" 
        placeholder="Attestation key" 
        onChange={(e) => {
          setKey(e.target.value)
          setBytes32Key(ethers.utils.formatBytes32String(e.target.value))
        }}
        value={key}
      />
      <p>{data}</p>
      <p>{data? ethers.utils.toUtf8String(data): ""}</p>
    </AttestForm>
  )
}

export default ReadAttestation;