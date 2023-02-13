import * as React from 'react';
import {useController, useFormContext} from 'react-hook-form';
import {BrainlyField, ValidationRules} from './types';

type FieldPropsType = {
  name: string;
  validationRules?: ValidationRules;
};

export function useBrainlyFormField({
  name,
  validationRules,
}: FieldPropsType): BrainlyField {
  const form = useFormContext();
  const {
    field: {onChange, onBlur, ref, value},
    fieldState,
    formState: {isSubmitting, isValid, isSubmitted, isDirty: isFormDirty},
  } = useController({
    name,
    rules: validationRules,
  });

  const {error, isTouched, isDirty} = React.useMemo(
    () =>
      fieldState || {
        error: {message: undefined},
        isTouched: false,
        isDirty: false,
      },
    [fieldState]
  );

  const clearError = React.useCallback(() => {
    if (form) {
      form.clearErrors(name);
    } else {
      console.warn(
        'Form Context not exist, field is not able to handle form state'
      );
    }
  }, [form, name]);

  const setError = React.useCallback(
    (message: string) => {
      if (form) {
        form.setError(name, {message});
      } else {
        console.warn(
          'Form Context not exist, field is not able to handle form state'
        );
      }
    },
    [form, name]
  );

  const setValue = React.useCallback(
    (
      value: string | number | boolean | undefined,
      {shouldTouch, shouldValidate} = {
        shouldValidate: false,
        shouldTouch: false,
      }
    ) => {
      if (form) {
        form.setValue(name, value, {shouldTouch, shouldValidate});
      } else {
        console.warn(
          'Form Context not exist, field is not able to handle form state'
        );
      }
    },
    [form, name]
  );

  const setFocus = React.useCallback(() => {
    if (form) {
      form.setFocus(name);
    } else {
      console.warn(
        'Form Context not exist, field is not able to handle form state'
      );
    }
  }, [form, name]);

  const resetField = React.useCallback(() => {
    if (form) {
      form.resetField(name);
    } else {
      console.warn(
        'Form Context not exist, field is not able to handle form state'
      );
    }
  }, [form, name]);

  return {
    onChange,
    onBlur,
    clearError,
    setError,
    setValue,
    setFocus,
    error: error?.message,
    isDirty,
    isTouched,
    ref,
    value,
    resetField,
    formState: {
      isSubmitting,
      isValid,
      isSubmitted,
      isDirty: isFormDirty,
    },
  };
}
