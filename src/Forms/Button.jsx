import styled from "@emotion/styled";

export const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

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
