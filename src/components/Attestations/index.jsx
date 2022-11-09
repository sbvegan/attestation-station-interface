import styled from "styled-components";

import AttestationForm from "./AttestationForm";

const AttestationsFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`


const Attestations = () => {

    return(
        <AttestationsFormContainer>
            <AttestationForm />
        </AttestationsFormContainer>
    )
}

export default Attestations;