import styled from "styled-components";

const StyledCardElement = styled.article`
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  width: ${(props) => props.width || "60%"};
  padding: 1em;
  background: white;
  margin: 15px;

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    padding: 0.5em; /* Adjust padding for smaller screens */
    margin: 10px; /* Adjust margin for smaller screens */
  }
`;

export { StyledCardElement };
