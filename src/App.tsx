import React from "react";
import styled from "styled-components";
import List from "./components/List";

function App() {
  return (
    <Root>
      <List />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  /* padding: 16px; */
  margin: 0 auto;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
`;

export default App;
