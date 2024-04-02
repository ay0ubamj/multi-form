import styled from "@emotion/styled";
import React from "react";

export const FieldSet = ({ label, children }) => (
  <React.Fragment>
    {label && <Legend>{label}</Legend>}
    <Wrapper>{children}</Wrapper>
  </React.Fragment>
);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
`;

const Legend = styled.legend`
  font-family: "Arial", sans-serif;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;
