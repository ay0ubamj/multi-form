import React from "react";
import { Button } from "../Forms/Button";
import { FieldSet } from "../Forms/FieldSet";
import { Field } from "../Forms/Field";
import { Input } from "../Forms/Input";
import { ButtonWrapper } from "../Forms/ButtonWrapper";

export const Contact = () => {
  return (
    <FieldSet label="Contact">
      <Field label="First Name">
        <Input type="text" id="first_name" />
      </Field>
      <Field label="Last Name">
        <Input type="text" id="last_name" />
      </Field>
      <Field label="Email">
        <Input type="email" id="email" />
      </Field>
      <Field label="Birth Date">
        <Input type="date" id="birth_date" />
      </Field>
      <Field label="Country">
        <Input type="text" id="country" />
      </Field>
      <ButtonWrapper>
        <Button text="Next" link="/about" />
      </ButtonWrapper>
    </FieldSet>
  );
};
