import Menu from "./Menu.js";
import styled from "styled-components";
import Header from "./Header.js";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #eff7ed;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

// #dff7f4
