import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Components/Form/Input",
  parameters: {
    component: Input
  }
};

export const Default = args => <Input {...args} />;

const argTypes = {
  value: {
    type: { name: "string", required: false }
  },
  errorMessage: {
    type: { name: "string", required: false }
  }
};

Default.args = { value: "Some input value" };
Default.argTypes = argTypes;

export const Invalid = args => <Input {...args} />;

Invalid.args = {
  value: "Invalid input",
  errorMessage: "Some error",
  invalid: true
};
Invalid.argTypes = argTypes;
