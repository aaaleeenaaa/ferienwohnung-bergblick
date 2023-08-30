import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <>
      <Head>
        <title>Ferienwohnung Bergblick</title>
      </Head>
      <StyledHeader>
        <Image
          src="/mountain-icon.png"
          alt="Mountain icon"
          width={200}
          height={200}
        />
      </StyledHeader>
    </>
  );
}
