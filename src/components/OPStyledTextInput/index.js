import styled from 'styled-components'

export const TextInput = styled.input`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  
  height: 48px;
  width: 456px;

  font-weight: 400;
    font-size: 16px;
    line-height: 24px;

  /* 🌤️ $neutral/0 (White) */
  background: #FFFFFF;

  /* 🌤️ $neutral/300 */
  border: 1px solid #CBD5E0;
  border-radius: 12px;

  &:hover {
    border: 1px solid #A9B9CC;
  }

  &:focus {
    border: 2px solid #2173DF;
  }

  &:disabled {
    background: #F1F4F9;
    border: 1px solid #E2E8F0;
  }

  ${({ error }) => error && `
    border: 1px solid #DD6B20;
  `}
`
