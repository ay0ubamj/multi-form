import styled from "@emotion/styled";

export const ButtonWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
