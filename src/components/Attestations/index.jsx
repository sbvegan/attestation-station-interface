import styled from "styled-components";

import AttestationForm from "./AttestationForm";

const AttestationsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`


const Attestations = () => {

    return(
        <AttestationsWrapper>
            <AttestationForm />
        </AttestationsWrapper>
    )
}

export default Attestations;