import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/Terrasse.jpeg");
  background-size: cover;
  background-position: center;
  text-align: center;
  height: 15rem;
`;

const StyledHeaderText = styled(Link)`
  font-weight: bold;
  font-size: 4rem;
  text-decoration: none;
  color: white;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 10);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 10);
`;

export default function Header() {
  return (
    <>
      <Head>
        <title>Ferienwohnung Bergblick</title>
      </Head>
      <StyledHeader>
        <StyledHeaderText href="/">
          Ferienwohnung Bergblick in Kochel
        </StyledHeaderText>
      </StyledHeader>
    </>
  );
}

// <div>
//   <Image
// src="/mountain-icon.png"
// alt="Mountain icon"
// width={200}
// height={200}
// />
// </div>
