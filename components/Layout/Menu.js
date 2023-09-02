import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export default function Navbar() {
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

/*import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledMenu = styled.nav`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledMenu>
        <AiOutlineMenu onClick={toggleMenu} />
        {isOpen && (
          <ul>
            <li>
              <Link href="/index">Home</Link>
            </li>
            <li>
              <Link href="/#">Umgebung</Link>
            </li>
            <li>
              <Link href="/#">Preise</Link>
            </li>
            <li>
              <Link href="/#">Kontakt</Link>
            </li>
          </ul>
        )}
      </StyledMenu>
    </>
  );
}
*/
