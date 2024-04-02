import styled from "@emotion/styled";

export const Form = ({ children, ...props }) => {
  return (
    <Container>
      <form {...props} noValidate>
        {children}
      </form>
    </Container>
  );
};

const Container = styled.fieldset`
  width: 60%;
  padding: 20px 50px;
  border: 1px solid black;
  border-radius: 10px;
`;
