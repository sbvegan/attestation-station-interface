import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useNetwork
} from 'wagmi'
import tooltip from '../../assets/svg/tooltip.svg'
import { AttestationStationAddress } from '../../constants/addresses'
import AttestationStationABI from '../../constants/abi.json'

import { H2, Body14Bold } from '../StyledTypography'
import { PrimaryButton } from '../StyledButton'

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

const HashedKey = styled.textarea`
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

const NewAttestation = () => {
  const { chain } = useNetwork()
  const [etherscanBaseLink, setEtherscanBaseLink] = useState('')

  const [about, setAbout] = useState('')
  const [key, setKey] = useState('')
  const [hashedKey, setHashedKey] = useState('')
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
  const [hashedKeyHover, setHashedKeyHover] = useState(false)
  const [valueHover, setValueHover] = useState(false)

  const {
    config,
    error: prepareError,
    isError: isPrepareError
  } = usePrepareContractWrite({
    address: AttestationStationAddress,
    abi: AttestationStationABI,
    functionName: 'attest',
    args: [
      [attestation]
    ],
    enabled: Boolean(about) && Boolean(key) && Boolean(val)
  })
  const { data, error, isError, write } = useContractWrite(config)

  useEffect(() => {
    if (chain.name === 'Optimism') {
      setEtherscanBaseLink('https://optimistic.etherscan.io/tx/')
    }
    if (chain.name === 'Optimism Goerli') {
      setEtherscanBaseLink('https://goerli-optimism.etherscan.io/tx/')
    }
  }, [chain])

  useEffect(() => {
    try {
      let attest
      if (key.length > 31) {
        attest = {
          about,
          key: hashedKey,
          val: ethers.utils.toUtf8Bytes(val)
        }
      } else {
        attest = {
          about,
          key: ethers.utils.formatBytes32String(key),
          val: ethers.utils.toUtf8Bytes(val)
        }
      }
      setAttestation(attest)
    } catch (e) {
      console.error(e)
    }
    setIsAboutValid(ethers.utils.isAddress(about))
    // todo: make this more robust
    setIsKeyValid(key !== '')
    setIsValValid(val !== '')
  }, [about, key, val])

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  return (
    <>
      <AttestForm
        onSubmit={(e) => {
          e.preventDefault()
          write?.()
        }}
      >
        <H2>New attestation</H2>
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
                  The key describes what the attestation is about.
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
          onChange={(e) => {
            const key = e.target.value
            if (key.length > 31) {
              setKey(key)
              const bytesLikeKey = ethers.utils.toUtf8Bytes(key)
              const keccak256HashedKey = ethers.utils.keccak256(bytesLikeKey)
              setHashedKey(keccak256HashedKey)
            } else {
              setKey(key)
              setHashedKey('')
            }
          }}
          placeholder="Attestation key"
          value={key}
          valid={isKeyValid}
        />
        {key.length > 31
          ? <>
              <FormLabel>
                Hashed attestation key&nbsp;
                <TooltipContainer
                  onMouseEnter={() => setHashedKeyHover(true)}
                  onMouseLeave={() => setHashedKeyHover(false)}
                >
                  <TooltipIcon
                    src={tooltip}
                    alt="attestation key information tooltip icon"
                    hover={hashedKeyHover}
                  />
                  <TooltipBox>
                    <ul>
                      <li>
                        The key in the smart contract is limited to 32 bytes.
                      </li>
                      <li>
                        When a key is 32 characters or longer, it is hashed with
                        keccack256 to fit in the 32 bytes, and this is the result.
                      </li>
                      <li>
                        This will be the key recorded and used for the AttestationStation.
                      </li>
                    </ul>
                  </TooltipBox>
                </TooltipContainer>
              </FormLabel>
              <HashedKey
                type="text"
                rows={2}
                value={hashedKey}
                />
            </>
          : <span></span>
        }
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
                  The value that is associated with the key.
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
        <PrimaryButton disabled={!write || isLoading}>
          {isLoading ? 'Making attestion' : 'Make attestation'}
        </PrimaryButton>
        {isSuccess && (
          <div>
            <FormLabel>
              Successfully made attestation:&nbsp;
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`${etherscanBaseLink}${data?.hash}`}>
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
    </>
  )
}

export default NewAttestation
