import styled from 'styled-components'

export const PrimaryButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    isolation: isolate;

    /* 🌤️ $primary/600 (Default) */
    background: #FF0420;
    border: none;
    border-radius: 12px;

    /* Text/Medium 16pt · 1rem */
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 150% */
    text-align: center;

    /* 🌤️ $neutral/0 (White) */
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
        background: #EB001A;
    }

    &:disabled {
        background: #F1F4F9;
        border: 1px solid #E2E8F0;
        color: #68778D;
        cursor: not-allowed
    }
`

// todo: pressed, focused
