import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction
} from 'wagmi'
import { AttestationStationOptimismGoerliAddress } from '../../constants/addresses'
import AttestationStationABI from '../../constants/abi.json'

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
  ${({ valid }) => !valid && `
    border-color: #ff0420;
  `}
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

/**
 * TODO:
 *  - helper tooltips
 *  - error handling
 *  - user feedback
 *  - message success/failure
 *  - blockchain explorer link
 *  - handle optimism mainnet and testnet switching
 *  - use keccack256 for the key and go along with the attestation convention
 */

const Attest = () => {
  const [about, setAbout] = useState('')
  const [key, setKey] = useState('')
  const [val, setVal] = useState('')
  const [attestation, setAttestation] = useState({
    about,
    key,
    val
  })

  const [isAboutValid, setIsAboutValid] = useState(false)
  const [isKeyValid, setIsKeyValid] = useState(false)
  const [isValValid, setIsValValid] = useState(false)

  const {
    config,
    error: prepareError,
    isError: isPrepareError
  } = usePrepareContractWrite({
    address: AttestationStationOptimismGoerliAddress,
    abi: AttestationStationABI,
    functionName: 'attest',
    args: [
      [attestation]
    ],
    enabled: Boolean(about) && Boolean(key) && Boolean(val)
  })
  const { data, error, isError, write } = useContractWrite(config)

  useEffect(() => {
    const attest = {
      about,
      key: ethers.utils.formatBytes32String(key),
      val: ethers.utils.toUtf8Bytes(val)
    }
    setAttestation(attest)
    setIsAboutValid(ethers.utils.isAddress(about))
    // todo: make this more robust
    setIsKeyValid(key !== '')
    setIsValValid(val !== '')
  }, [about, key, val])

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  return (
    <AttestForm
      onSubmit={(e) => {
        e.preventDefault()
        write?.()
      }}
    >
      <FormLabel>Ethereum address</FormLabel>
      <Input
        type="text"
        placeholder="Who's this attestation about?"
        onChange={(e) => setAbout(e.target.value)}
        value={about}
        valid={isAboutValid}
      />
      <FormLabel>Attestation key</FormLabel>
      <Input
        type="text"
        onChange={(e) => setKey(e.target.value)}
        placeholder="Attestation key"
        value={key}
        valid={isKeyValid}
      />
      <FormLabel>Attestation value</FormLabel>
      <Input
        type="text"
        placeholder="Attestation value"
        onChange={(e) => setVal(e.target.value)}
        value={val}
        valid={isValValid}
      />
      <SubmitButton disabled={!write || isLoading}>
        Make attestation
      </SubmitButton>
      {isSuccess && (
        <div>
          Successfully made attestation!
          <div>
            <a href={`https://goerli-optimism.etherscan.io/tx/${data?.hash}`}>Optimism Goerli - Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </AttestForm>
  )
}

export default Attest
