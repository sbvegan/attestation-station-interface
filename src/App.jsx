import styled from "styled-components";

import NavBar from "./components/NavBar"

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const HeaderWrapper = styled.div`
  width: 100%;
`

export default function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <NavBar />
      </HeaderWrapper>
    </AppWrapper>
  );
}
