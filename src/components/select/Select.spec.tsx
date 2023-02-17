import * as React from 'react';
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

describe('<Select />', () => {
  const renderSelect = props =>
    render(
      <Select
        options={[
          {
            value: 'physics',
            label: 'Physics',
          },
          {value: 'history', label: 'History'},
          {value: 'science', label: 'Science'},
        ]}
        onClick={() => jest.fn()}
        onOptionChange={() => jest.fn()}
        onToggle={() => jest.fn()}
        {...props}
      />
    );

  it('renders Select', () => {
    const select = renderSelect({});
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(select.getByText('Select...')).toBeTruthy();
    expect(selectElement.getAttribute('aria-disabled')).toBeFalsy();
    expect(selectElement.getAttribute('aria-invalid')).toBeFalsy();
    expect(selectElement.getAttribute('aria-expanded')).toBe('false');
  });

  it('opens options popup when select element is clicked', async () => {
    const select = renderSelect({});
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeTruthy();
  });

  it('closes options popup when user clicks outside of it', async () => {
    const select = renderSelect({});
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(select.queryByRole('listbox')).toBeTruthy();
    userEvent.click(document.body);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('false');
    expect(select.queryByRole('listbox')).toBeFalsy();
  });

  it('renders with options popup open when select is set as default expanded', async () => {
    const select = renderSelect({defaultExpanded: true});
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeTruthy();
    userEvent.click(document.body);
    expect(select.queryByRole('listbox')).toBeFalsy();
    expect(selectElement.getAttribute('aria-expanded')).toEqual('false');
  });

  // navigation with keyboard
  // closes when element is clicked
  // multiple elements selection
  // placeholder change to selected items labels
  // valid state
  // invalid state
  // disabled state
});
