import styled from "@emotion/styled";

export const Field = ({ label, children }) => (
  <Container>
    {label && <Label>{label}</Label>}
    {children}
  </Container>
);

const Label = styled.label`
  font-family: "Arial", sans-serif;
  font-size: 17px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
