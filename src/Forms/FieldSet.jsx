import styled from "@emotion/styled";

export const FieldSet = ({ label, children }) => (
  <Container>
    {label && <Legend>{label}</Legend>}
    <Wrapper>{children}</Wrapper>
  </Container>
);

const Container = styled.fieldset`
  width: 60%;
  margin: 16px 0;
  padding: 0;
  border: none;
`;

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
