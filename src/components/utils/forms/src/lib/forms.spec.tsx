import * as React from 'react';
import {useBrainlyFormField} from './useBrainlyFormField';
import {useBrainlyForm} from './useBrainlyForm';
import {ValidationRules} from '../../../../wizard/_dev_utils/types';
import {renderHook} from '@testing-library/react-hooks';
import {fireEvent, render} from '@testing-library/react';

const mockSubmit = jest.fn();

const renderForm = (
  submit: any = mockSubmit,
  hookProps: any = {defaultValues: undefined, validationStrategy: 'change'},
  validationRules?: ValidationRules
) => {
  const formHookResult = renderHook(() =>
    useBrainlyForm<{input: string}>(hookProps)
  );

  const InputComponent = ({
    validationRules,
  }: {
    validationRules?: ValidationRules;
  }) => {
    const {ref, onChange, error} = useBrainlyFormField({
      name: 'input',
      validationRules,
    });

    return (
      <>
        <input data-testid="input" ref={ref} onChange={onChange} />
        <div data-testid="error">{error}</div>
      </>
    );
  };

  const Component = () => (
    <formHookResult.result.current.Form onSubmit={submit}>
      <InputComponent validationRules={validationRules} />
      <input data-testid="submit" type="submit" />
    </formHookResult.result.current.Form>
  );

  const renderedInput = render(<Component />);

  return {formHookResult, renderedInput};
};

describe('Brainly Forms', () => {
  it('renders form correctly and change values on input', () => {
    const {renderedInput, formHookResult} = renderForm();

    const input = renderedInput.getByTestId('input');

    expect(formHookResult.result.current.getValues()).toEqual({
      input: undefined,
    });

    fireEvent.change(input, {target: {value: 'new value!'}});

    expect(formHookResult.result.current.getValues()).toEqual({
      input: 'new value!',
    });
  });

  it('renders form correctly and submitting changes', async () => {
    const {renderedInput, formHookResult} = renderForm();

    const input = renderedInput.getByTestId('input');

    fireEvent.change(input, {target: {value: 'new value!'}});

    await formHookResult.waitForNextUpdate();

    expect(formHookResult.result.current.formState).toEqual({
      isDirty: true,
      isSubmitted: false,
      isValid: true,
      isSubmitting: false,
      isSubmitSuccessful: false,
      errors: {},
    });

    const submitButton = renderedInput.getByTestId('submit');

    fireEvent.submit(submitButton);

    await formHookResult.waitForNextUpdate();

    expect(formHookResult.result.current.formState).toEqual({
      isDirty: true,
      isSubmitted: true,
      isValid: true,
      isSubmitting: false,
      isSubmitSuccessful: true,
      errors: {},
    });
  });

  it('renders form correctly and submitting changes with promise Submit', async () => {
    const {renderedInput, formHookResult} = renderForm(async (values: any) => {
      return Promise.resolve(mockSubmit(values));
    });

    const input = renderedInput.getByTestId('input');

    fireEvent.change(input, {target: {value: 'new value!'}});

    await formHookResult.waitForNextUpdate();

    const submitButton = renderedInput.getByTestId('submit');

    fireEvent.submit(submitButton);

    expect(formHookResult.result.current.formState).toEqual({
      isDirty: true,
      isSubmitted: false,
      isValid: true,
      isSubmitting: true,
      isSubmitSuccessful: false,
      errors: {},
    });

    await formHookResult.waitForNextUpdate();

    expect(formHookResult.result.current.formState).toEqual({
      isDirty: true,
      isSubmitted: true,
      isValid: true,
      isSubmitting: false,
      isSubmitSuccessful: true,
      errors: {},
    });
  });

  it('renders form correctly with default values', async () => {
    const {formHookResult} = renderForm(mockSubmit, {
      defaultValues: {
        input: 'hello',
      },
    });

    expect(formHookResult.result.current.getValues()).toEqual({
      input: 'hello',
    });
  });

  it('validate required validator', async () => {
    const {renderedInput, formHookResult} = renderForm(
      mockSubmit,
      {},
      {
        required: {
          message: 'Field is required!',
          value: true,
        },
      }
    );

    const input = renderedInput.getByTestId('input');

    const submitButton = renderedInput.getByTestId('submit');

    fireEvent.submit(submitButton);

    await formHookResult.waitForNextUpdate();

    const error = renderedInput.getByTestId('error');

    expect(error.textContent).toEqual('Field is required!');

    fireEvent.change(input, {target: {value: 'new value!'}});

    await formHookResult.waitForNextUpdate();

    const errorAfterRender = renderedInput.getByTestId('error');

    expect(errorAfterRender.textContent).toEqual('');
  });

  it.each`
    validator                                                                                     | error                                    | valueToFill
    ${{min: {message: 'Min value needs to be 10', value: 10}}}                                    | ${'Min value needs to be 10'}            | ${8}
    ${{max: {message: 'Max value needs to be 10', value: 10}}}                                    | ${'Max value needs to be 10'}            | ${12}
    ${{minLength: {message: 'MinLength needs to be 10 characters', value: 10}}}                   | ${'MinLength needs to be 10 characters'} | ${'hello'}
    ${{maxLength: {message: 'MaxLength needs to be 10 characters', value: 10}}}                   | ${'MaxLength needs to be 10 characters'} | ${'some long text over 10char'}
    ${{pattern: {message: 'Email is incorrect!', value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}}}      | ${'Email is incorrect!'}                 | ${'incorrectMail.com'}
    ${{validate: (value = '') => (value === 'hello' ? 'valid' : 'value needs to contain hello')}} | ${'value needs to contain hello'}        | ${'value'}
  `('validate $validator', async ({validator, error, valueToFill}) => {
    const {renderedInput, formHookResult} = renderForm(
      mockSubmit,
      {},
      validator
    );

    const input = renderedInput.getByTestId('input');

    fireEvent.change(input, {target: {value: valueToFill}});

    const submitButton = renderedInput.getByTestId('submit');

    fireEvent.submit(submitButton);

    await formHookResult.waitForNextUpdate();

    const err = renderedInput.getByTestId('error');

    expect(err.textContent).toEqual(error);
  });

  it('changes form value using setValue', async () => {
    const {formHookResult} = renderForm(mockSubmit, {
      defaultValues: {
        input: 'hello',
      },
    });

    expect(formHookResult.result.current.getValues()).toEqual({
      input: 'hello',
    });

    formHookResult.result.current.setValue('input', 'new value');

    expect(formHookResult.result.current.getValues()).toEqual({
      input: 'new value',
    });
  });
});
