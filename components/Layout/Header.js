import styled from "styled-components";
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

  @media (max-width: 768px) {
    height: 10rem;
  }
`;

const StyledHeaderText = styled(Link)`
  font-weight: bold;
  font-size: 4rem;
  text-decoration: none;
  color: white;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderText href="/">
          Ferienwohnung Bergblick in Kochel/Ried
        </StyledHeaderText>
      </StyledHeader>
    </>
  );
}
