import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction
} from 'wagmi'
import tooltip from '../../assets/svg/tooltip.svg'
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
  margin: 16px 0;
  padding: 0 24px;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: rgb(235, 0, 26);
  }
`

const Link = styled.a`
  color: #f01a37;
`

const TooltipIcon = styled.img`
  cursor: pointer;
  height: 12px;
`

const TooltipBox = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  position: absolute;
`

const TooltipContainer = styled.span`
  & ${TooltipIcon}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 404px;
    padding: 8px 8px;
    border-radius: 4px;
}
`

/**
 * TODO:
 *  - helper tooltips
 *  - error handling
 *  - user feedback
 *  - message success/failure
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

  const [keyHover, setKeyHover] = useState(false)
  const [valueHover, setValueHover] = useState(false)

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
    try {
      const attest = {
        about,
        key: ethers.utils.formatBytes32String(key),
        val: ethers.utils.toUtf8Bytes(val)
      }
      setAttestation(attest)
    } catch (e) {
      console.error(e)
    }
    setIsAboutValid(ethers.utils.isAddress(about))
    // todo: make this more robust
    setIsKeyValid(key !== '' && key.length < 32)
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
      <FormLabel>
        Ethereum address
      </FormLabel>
      <Input
        type="text"
        placeholder="Who's this attestation about?"
        onChange={(e) => setAbout(e.target.value)}
        value={about}
        valid={isAboutValid}
      />
      <FormLabel>
        Attestation key&nbsp;
        <TooltipContainer
          onMouseEnter={() => setKeyHover(true)}
          onMouseLeave={() => setKeyHover(false)}
        >
          <TooltipIcon
            src={tooltip}
            alt="attestation key information tooltip icon"
            hover={keyHover}
          />
          <TooltipBox>
            <ul>
              <li>
                An easy way to to describe what the attestation is about.
              </li>
              <li>
                It is recommended that the value data type is appended (bool, string, address, etc).
              </li>
              <li>
                This is limited to 31 characters. The smart contract definition is a bytes32 variable
                and the last byte is reserved for more complicated keys. See the developer tutorial
                for more information.
              </li>
              <li>
                Example: sbvegan.interface.used:bool
              </li>
            </ul>
          </TooltipBox>
        </TooltipContainer>
      </FormLabel>
      <Input
        type="text"
        onChange={(e) => setKey(e.target.value)}
        placeholder="Attestation key"
        value={key}
        maxLength="31" // convention for attestation station - bytes32 and the last byte is reserved
        valid={isKeyValid}
      />
      <FormLabel>
        Attestation value&nbsp;
        <TooltipContainer
          onMouseEnter={() => setValueHover(true)}
          onMouseLeave={() => setValueHover(false)}
        >
          <TooltipIcon
            src={tooltip}
            alt="attestation value information tooltip icon"
            hover={valueHover}
          />
          <TooltipBox>
            <ul>
              <li>
                The value is associated with the key.
              </li>
              <li>
                Example: true
              </li>
            </ul>
          </TooltipBox>
        </TooltipContainer>
      </FormLabel>
      <Input
        type="text"
        placeholder="Attestation value"
        onChange={(e) => setVal(e.target.value)}
        value={val}
        valid={isValValid}
      />
      <SubmitButton disabled={!write || isLoading}>
        {isLoading ? 'Making attestion' : 'Make attestation'}
      </SubmitButton>
      {isSuccess && (
        <div>
          <FormLabel>
            Successfully made attestation:&nbsp;
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`https://goerli-optimism.etherscan.io/tx/${data?.hash}`}>
                etherscan transaction
            </Link>
          </FormLabel>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>
          <FormLabel>
            Error: {(prepareError || error)?.message}
          </FormLabel>
        </div>
      )}
    </AttestForm>
  )
}

export default Attest
