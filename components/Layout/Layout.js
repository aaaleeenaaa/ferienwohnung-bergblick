import Navbar from "./Menu.js";
import styled from "styled-components";
import Header from "./Header.js";

const StyledMain = styled.main`
  margin-top: 5rem;
  margin-bottom: 4.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
