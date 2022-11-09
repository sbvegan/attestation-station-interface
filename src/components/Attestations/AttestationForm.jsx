import { useState } from "react";
import styled from "styled-components";
import AttestationFormContent from "./AttestationFormContent";

const AttestationFormWrapper = styled.div`
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgba(20, 23, 26, 0.12) 0px 0px 8px -4px, rgba(20, 23, 26, 0.08) 0px 4px 16px -1px;
  display: flex;
  flex-direction: column;
  padding: 36px;
  width: 552px;
`

const LinkWrapper = styled.div`
  margin-bottom: 28px;
`

const Link = styled.a`
  color: rgb(104, 119, 141);
  cursor: pointer;
  font-family: Open Sans, sans-serif;
  font-size: 24px;
  margin-right: 24px;
  text-decoration-line: none;
  text-decoration-style: none;

  ${({ active }) => active && `
    color: #ff0420;
    font-weight: 700;
  `}
`


const AttestationForm = () => {

    const [active, setActive] = useState(0)

    return(
        <AttestationFormWrapper>
          <LinkWrapper>
            <Link 
              active={active === 0}
              onClick={() => setActive(0)}
            >
              Attest
            </Link>
            <Link 
              active={active === 1}
              onClick={() => setActive(1)}
            >
              Read Attestation
            </Link>
            <Link 
              active={active === 2}
              onClick={() => setActive(2)}
            >
              About
            </Link>
          </LinkWrapper>
          <AttestationFormContent active={active} />
        </AttestationFormWrapper>
    )
}

export default AttestationForm;