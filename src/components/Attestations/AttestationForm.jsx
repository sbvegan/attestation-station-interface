import styled from "styled-components";

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

`


const AttestationForm = () => {

    return(
        <AttestationFormWrapper>
            <LinkWrapper>
                <Link>Attest</Link>
                <Link>Read Attestation</Link>
                <Link>About</Link>
            </LinkWrapper>
        </AttestationFormWrapper>
    )
}

export default AttestationForm;