import styled from "styled-components";
import Attest from "./Attest";


const AttestationFormContent = (props) => {


    
    switch(props.active) {
        case 0:
            return <Attest />
        case 1: 
            return <div>Read Attestation</div>
        case 2: 
            return <div>About</div>
        default:
            return <div>oops...</div>
    
    }
}

export default AttestationFormContent;