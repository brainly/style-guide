import * as React from 'react';

export type FormFields = Record<string, any>;

type FormSetValue<TFieldValues extends FormFields> = (
  name: keyof TFieldValues,
  value: TFieldValues[keyof TFieldValues]
) => void;

export type BrainlyForm<T> = {
  Form: (props: FormComponentPropsType<T>) => JSX.Element;
  clearErrors: (name?: keyof T | keyof T[]) => void;
  reset: <T>(values?: T, options?: Record<string, boolean>) => void;
  getValues: () => T;
  setError: (field: keyof T, message: string) => void;
  setValue: FormSetValue<T>;
  formState: {
    isSubmitting: boolean;
    isSubmitted: boolean;
    isValid: boolean;
    isDirty: boolean;
    isSubmitSuccessful: boolean;
    errors: Record<keyof T, string>;
  };
  register: (
    name: keyof T,
    validationRules?: ValidationRules
  ) => {
    onChange: (...event: any[]) => void;
    onBlur: (...event: any[]) => void;
    ref: React.RefCallback<any>;
    name: keyof T;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
};

type SetValueOptionsType = {
  shouldTouch: boolean;
  shouldValidate: boolean;
};

export type BrainlyField = {
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
  isTouched: boolean;
  isDirty: boolean;
  error: string | undefined;
  ref: React.RefCallback<any>;
  value: string | number | undefined;
  setError: (error: string) => void;
  setValue: (
    value: string | number | boolean | undefined,
    options?: SetValueOptionsType
  ) => void;
  clearError: () => void;
  resetField: () => void;
  setFocus: () => void;
  formState: {
    isSubmitting: boolean;
    isSubmitted: boolean;
    isValid: boolean;
    isDirty: boolean;
  };
};

export type FormComponentPropsType<T> = {
  onSubmit: (data: T, event?: React.BaseSyntheticEvent) => any | Promise<any>;
  children: React.ReactNode;
};

export type ValidationRules = {
  min?: {
    message: string;
    value: number;
  };
  max?: {
    message: string;
    value: number;
  };
  minLength?: {
    message: string;
    value: number;
  };
  maxLength?: {
    message: string;
    value: number;
  };
  required?: {
    message: string;
    value: boolean;
  };
  pattern?: {
    message: string;
    value: RegExp;
  };
  validate?: (value: string | number) => boolean | string;
};
