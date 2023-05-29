import * as React from 'react';

import {useForm, FormProvider, UseFormReturn} from 'react-hook-form';
import {
  BrainlyForm,
  FormComponentPropsType,
  FormFields,
  ValidationRules,
} from './types';

function createFormComponent<T>(form: UseFormReturn<T>) {
  return ({children, onSubmit}: FormComponentPropsType<T>) => (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export function useBrainlyForm<T extends FormFields = FormFields>(
  {
    defaultValues,
    validationStrategy,
    delayErrorMs,
  }: {
    defaultValues?: T;
    validationStrategy?: 'onChange' | 'onSubmit' | 'onBlur';
    delayErrorMs?: number;
  } = {
    defaultValues: undefined,
    validationStrategy: 'onChange',
    delayErrorMs: 0,
  }
): BrainlyForm<T> {
  const form = useForm<T & FormFields>({
    // ignoring typing to do not use types from React hook form directly
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: defaultValues || {},
    mode: validationStrategy || 'onChange',
    reValidateMode: validationStrategy || 'onChange',
    delayError: delayErrorMs,
  });

  const Form = React.useMemo(() => createFormComponent<T>(form), [form]);

  const {
    isDirty,
    isSubmitted,
    isValid,
    isSubmitting,
    isSubmitSuccessful,
    errors: useFormErrors,
  } = React.useMemo(() => form.formState, [form.formState]);

  const setError = React.useCallback(
    (field: keyof FormFields, message: string) => {
      // ignoring typing to do not use types from React hook form directly
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return form.setError(field, {type: 'custom', message});
    },
    [form]
  );

  const errors = React.useMemo(() => {
    if (useFormErrors) {
      return Object.keys(useFormErrors).reduce((acc, error) => {
        acc[error] = useFormErrors[error]?.message as string | undefined;
        return acc;
      }, {} as Record<string, string | undefined>);
    }
    return {};
  }, [useFormErrors]);

  const register = React.useCallback(
    (name: keyof T, validationRules?: ValidationRules) => {
      const {
        onBlur,
        onChange,
        ref,
        name: returnName,
        min,
        max,
        maxLength,
        minLength,
        pattern,
        required,
        disabled,
        // ignoring typing to do not use types from React hook form directly
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      } = form.register(name, {...(validationRules ? validationRules : {})});

      return {
        onBlur,
        onChange,
        ref,
        name: returnName,
        min,
        max,
        maxLength,
        minLength,
        pattern,
        required,
        disabled,
      };
    },
    [form]
  );

  return {
    Form,
    register,
    formState: {
      isDirty,
      isSubmitted,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      // ignoring typing to do not use types from React hook form directly
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      errors,
    },
    // ignoring typing to do not use types from React hook form directly
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setError,
    // ignoring typing to do not use types from React hook form directly
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    clearErrors: form.clearErrors,
    // ignoring typing to do not use types from React hook form directly
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reset: form.reset,
    getValues: form.getValues,
    // ignoring typing to do not use types from React hook form directly
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setValue: form.setValue,
  };
}
