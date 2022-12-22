import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import styled from 'styled-components'
import { useContractRead } from 'wagmi'
import { AttestationStationAddress } from '../../constants/addresses'
import AttestationStationABI from '../../constants/abi.json'

import { TextInput } from '../OPStyledTextInput'
import { H2, Body16Medium } from '../OPStyledTypography'

const AttestForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
`

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  gap: 24px;
  width: 672px;
  height: 48px;
`

const FormLabel = styled(Body16Medium)`
  margin: 0;
  width: 192px;
  height: 24px;
  text-align: right;
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
  width: 456px;
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
    address: AttestationStationAddress,
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
    <>
      <H2>Read attestation</H2>
      <AttestForm>
        <FormRow>
          <FormLabel>Creator&apos;s address</FormLabel>
          <TextInput
            type="text"
            placeholder="Who created this attestation?"
            onChange={(e) => setCreator(e.target.value)}
            value={creator}
            valid={isCreatorValid}
          />
        </FormRow>

        <FormRow>
          <FormLabel>Subject&apos;s address</FormLabel>
          <TextInput
            type="text"
            placeholder="Who's this attestation about?"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            valid={isAboutValid}
          />
        </FormRow>

        <FormRow>
          <FormLabel>Attestation key</FormLabel>
          <TextInput
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
        </FormRow>
        {data
          ? <>
              <FormRow>
                <FormLabel>Value</FormLabel>
                <Textarea
                  readOnly
                  value={data}
                />
              </FormRow>

              <FormRow>
                <FormLabel>String formatted value</FormLabel>
                <Textarea
                  readOnly
                  value={data ? ethers.utils.toUtf8String(data) : ''}
                />
              </FormRow>
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
    </>
  )
}

export default ReadAttestation
