import React from "react";
import { Button } from "../Forms/Button";
import { ButtonWrapper } from "../Forms/ButtonWrapper";
import { FieldSet } from "../Forms/FieldSet";
import { Form } from "../Forms/Form";

export const Summary = () => {
  return (
    <Form>
      <FieldSet label="Summary">
        <ButtonWrapper>
          <Button text="Submit" link="/" />
        </ButtonWrapper>
      </FieldSet>
    </Form>
  );
};
