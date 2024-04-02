import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Forms/Button";
import { ButtonWrapper } from "../Forms/ButtonWrapper";
import { Field } from "../Forms/Field";
import { FieldSet } from "../Forms/FieldSet";
import { Form } from "../Forms/Form";
import { Input } from "../Forms/Input";
import { useAppState } from "../state";

export const Contact = () => {
  const [appState, setAppState] = useAppState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    // setAppState(data);
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(save)}>
      <FieldSet label="Contact">
        <Field label="First Name" error={errors?.firstName}>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName", { required: "First name is required" })}
          />
        </Field>
        <Field label="Last Name" error={errors?.lastName}>
          <Input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
          />
        </Field>
        <Field label="Email" error={errors?.email}>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
            })}
          />
        </Field>
        <Field label="Birth Date" error={errors?.birthDate}>
          <Input
            type="date"
            id="birthDate"
            {...register("birthDate", {
              required: "Please select a date",
            })}
          />
        </Field>
        <Field label="Country" error={errors?.country}>
          <Input
            type="text"
            id="country"
            {...register("country", { required: "Country is required" })}
          />
        </Field>
        <ButtonWrapper>
          <Button text="Next" />
        </ButtonWrapper>
      </FieldSet>
    </Form>
  );
};
