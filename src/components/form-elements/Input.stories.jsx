import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Components/Form/Input",
  parameters: {
    component: Input
  }
};

const useInput = args => {
  const [value, setValue] = useState(args.value);

  const onChange = event => {
    setValue(event.target.value);
  };

  return { value, onChange };
};

export const Default = args => {
  const props = useInput(args);

  return <Input {...args} {...props} />;
};

export const ErroredState = args => {
  const props = useInput(args);

  return <Input {...args} {...props} />;
};

const args = {
  value: "Some input value"
};

const argTypes = {
  value: {
    type: { name: "string", required: false }
  },
  errorMessage: {
    type: { name: "string", required: false }
  }
};

Default.args = args;
Default.argTypes = argTypes;

ErroredState.args = { ...args, errorMessage: "Some error", invalid: true };
ErroredState.argTypes = argTypes;
