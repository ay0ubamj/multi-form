import styled from "@emotion/styled";

export const Input = ({ type, id, ...props }) => (
  <StyledInput type={type} id={id} {...props} />
);

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-top: 10px;
  font-family: "Arial", sans-serif;
  font-size: 14px;
`;
