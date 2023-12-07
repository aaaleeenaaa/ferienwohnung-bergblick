import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledFooter = styled.footer`
  background-color: #eff7ed;
  margin: 0;
  padding: 0;
`;

export default function Footer() {
  const router = useRouter();

  const isLegalDisclosurePage = router.pathname === "/legaldisclosure";

  return (
    <StyledFooter>
      {isLegalDisclosurePage ? (
        <Link href="/">Zurück zur Homepage</Link>
      ) : (
        <Link href="/legaldisclosure">Impressum</Link>
      )}
    </StyledFooter>
  );
}
