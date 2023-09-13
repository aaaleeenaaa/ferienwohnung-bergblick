import Navbar from "./Menu.js";
import styled from "styled-components";
import Header from "./Header.js";

const StyledMain = styled.main`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
