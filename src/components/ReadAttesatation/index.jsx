import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import styled from 'styled-components'
import { useContractRead } from 'wagmi'
import { AttestationStationOptimismGoerliAddress } from '../../constants/addresses'
import AttestationStationABI from '../../constants/abi.json'

import { H2, Body14Bold } from '../StyledTypography'

const AttestForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
`

const FormLabel = styled(Body14Bold)`
  margin: 0
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

const Textarea = styled.textarea`
  align-items: center;
  border: 1px solid #cbd5e0;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 8px 0;
  outline-style: none;
  padding: 9px 12px;
  width: 420px;
  resize:none;
`

const ReadAttestation = () => {
  const [creator, setCreator] = useState('')
  const [about, setAbout] = useState('')
  const [key, setKey] = useState('')
  const [bytes32Key, setBytes32Key] = useState('')

  const [isCreatorValid, setIsCreatorValid] = useState(false)
  const [isAboutValid, setIsAboutValid] = useState(false)
  const [isKeyValid, setIsKeyValid] = useState(false)

  const { data, error, isError } = useContractRead({
    address: AttestationStationOptimismGoerliAddress,
    abi: AttestationStationABI,
    functionName: 'attestations',
    args: [creator, about, bytes32Key],
    enabled: Boolean(creator) && Boolean(about) && Boolean(bytes32Key)
  })

  useEffect(() => {
    setIsCreatorValid(ethers.utils.isAddress(creator))
    setIsAboutValid(ethers.utils.isAddress(about))
    setIsKeyValid(key !== '')
    if (isError) {
      console.error(error)
      console.error(error.value)
      console.error(error.code)
    }
  }, [creator, about, key, isError, error])

  return (
    <AttestForm>
      <H2>Read attestation</H2>
      <FormLabel>Creator&apos;s Ethereum address</FormLabel>
      <Input
        type="text"
        placeholder="Who created this attestation?"
        onChange={(e) => setCreator(e.target.value)}
        value={creator}
        valid={isCreatorValid}
      />
      <FormLabel>Subject&apos;s Ethereum address</FormLabel>
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
        placeholder="Attestation key"
        onChange={(e) => {
          const key = e.target.value
          if (key.length > 31) {
            setKey(key)
            setBytes32Key(key)
          } else {
            setKey(key)
            setBytes32Key(ethers.utils.formatBytes32String(key))
          }
        }}
        value={key}
        valid={isKeyValid}
      />
      {data
        ? <>
          <FormLabel>Value</FormLabel>
          <Textarea>{data}</Textarea>
          <FormLabel>String formatted value</FormLabel>
          <Textarea>{data ? ethers.utils.toUtf8String(data) : ''}</Textarea>
        </>
        : <></>
      }
      {(isError) && (
        <div>
          <FormLabel>
            Error: {(error)?.message}
          </FormLabel>
        </div>
      )}
    </AttestForm>
  )
}

export default ReadAttestation
