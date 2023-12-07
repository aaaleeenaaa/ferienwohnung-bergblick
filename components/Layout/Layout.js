import Menu from "./Menu.js";
import styled from "styled-components";
import Header from "./Header.js";
import Footer from "./Footer.js";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #eff7ed;
  min-height: 55vh;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}
