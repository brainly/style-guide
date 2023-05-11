import * as React from 'react';

export type CardRadioGroupContextType = {
  name?: string;
  required: boolean;
  disabled: boolean;
  invalid?: boolean;
  value?: string;
  onChange?(value: string): void;
};

export const CardRadioGroupContext =
  React.createContext<CardRadioGroupContextType>({
    required: false,
    disabled: false,
  });

export const useCardRadioGroupContext = () => {
  const context = React.useContext(CardRadioGroupContext);

  if (!context) {
    throw new Error('Component must be used within a CardRadioGroup');
  }
  return context;
};
