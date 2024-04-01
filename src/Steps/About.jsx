import styled from "@emotion/styled";
import React from "react";
import { FieldSet } from "../Forms/FieldSet";
import { ButtonWrapper } from "../Forms/ButtonWrapper";
import { Button } from "../Forms/Button";

export const About = () => {
  return (
    <FieldSet label="About">
      <TextArea />
      <ButtonWrapper>
        <Button text="Previous" link="/" />
        <Button text="Next" link="/summary" />
      </ButtonWrapper>
    </FieldSet>
  );
};

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: vertical;
`;
