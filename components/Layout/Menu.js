import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #eff7ed;
  padding-bottom: 1rem;
  padding-top: 1rem;

  & > * {
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;

    & > * {
      margin: 0.5rem 0;
    }
  }
`;

export default function Menu() {
  return (
    <StyledNavbar>
      <Link href="/">Home</Link>
      <Link href="/appartment">Die Wohnung</Link>
      <Link href="/prices">Infos und Preise</Link>
      <Link href="/surroundings">Umgebung</Link>
      <Link href="/arrival">Anfahrt</Link>
      <Link href="/contact">Kontakt</Link>
    </StyledNavbar>
  );
}
