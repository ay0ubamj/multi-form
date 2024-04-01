import React from "react";
import { FieldSet } from "../Forms/FieldSet";
import { ButtonWrapper } from "../Forms/ButtonWrapper";
import { Button } from "../Forms/Button";

export const Summary = () => {
  return (
    <FieldSet label="Summary">
      <ButtonWrapper>
        <Button text="Submit" link="/" />
      </ButtonWrapper>
    </FieldSet>
  );
};
