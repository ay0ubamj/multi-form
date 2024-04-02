import styled from "@emotion/styled";
import React from "react";
import { Button } from "../Forms/Button";
import { ButtonWrapper } from "../Forms/ButtonWrapper";
import { FieldSet } from "../Forms/FieldSet";
import { Form } from "../Forms/Form";

export const About = () => {
  return (
    <Form>
      <FieldSet label="About">
        <TextArea />
        <ButtonWrapper>
          <Button text="Previous" link="/" />
          <Button text="Next" link="/summary" />
        </ButtonWrapper>
      </FieldSet>
    </Form>
  );
};

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: vertical;
`;
