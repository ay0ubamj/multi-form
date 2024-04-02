import styled from "@emotion/styled";
import React from "react";

export const Field = ({ children, label, error }) => {
  const id = getChildId(children);
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <div className="error">{error.message}</div>}
    </Container>
  );
};

export const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};

const Label = styled.label`
  font-family: "Arial", sans-serif;
  font-size: 17px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
