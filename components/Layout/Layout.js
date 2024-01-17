import Menu from "./Menu.js";
import styled from "styled-components";
import Header from "./Header.js";
import Footer from "./Footer.js";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eff7ed;
  padding: 2rem; /* Add some padding around the content */

  /* Adjust min-height for smaller screens */
  min-height: calc(100vh - 15rem); /* Adjust this value as needed */

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    min-height: calc(100vh - 10rem); /* Adjust this value for smaller header */
  }
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
