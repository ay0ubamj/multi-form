import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Button = ({ text, link }) => (
  <StyledLink to={link}>
    <StyledButton>{text} </StyledButton>
  </StyledLink>
);

const StyledButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 18px 42px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: #45a049;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
