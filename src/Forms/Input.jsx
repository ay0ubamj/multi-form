import styled from "@emotion/styled";
import React from "react";

export const Input = React.forwardRef((props, ref) => {
  const { type, id, ...otherProps } = props;
  return <StyledInput type={type} id={id} ref={ref} {...otherProps} />;
});

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
