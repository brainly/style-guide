import * as React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

export function RenderSelect(props: {
  multiSelect?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
}) {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const handleOptionChange = option => {
    if (props.multiSelect) {
      if (!selectedOptions.find(item => item.value === option.value))
        // If it was not present, add it
        setSelectedOptions([...selectedOptions, option]);
      else {
        // else, remove from array of selected options
        setSelectedOptions(
          [...selectedOptions].filter(item => item.value !== option.value)
        );
      }
    } else {
      setSelectedOptions([option]);
    }
  };

  return (
    <Select
      options={[
        {
          value: 'physics',
          label: 'Physics',
        },
        {value: 'history', label: 'History'},
        {value: 'science', label: 'Science'},
      ]}
      placeholder="Select..."
      selectedOptions={selectedOptions}
      onOptionChange={handleOptionChange}
      disabled={props.disabled}
      valid={props.valid}
      invalid={props.invalid}
      {...props}
    />
  );
}

window.HTMLElement.prototype.scroll = jest.fn();

describe('<Select />', () => {
  it('renders Select', () => {
    const select = render(<RenderSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(select.getByText('Select...')).toBeTruthy();
    expect(selectElement.getAttribute('aria-disabled')).toBeFalsy();
    expect(selectElement.getAttribute('aria-invalid')).toBeFalsy();
    expect(selectElement.getAttribute('aria-expanded')).toBe('false');
  });

  it('opens options popup when select element is clicked', async () => {
    const select = render(<RenderSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeTruthy();
  });

  it('can select single option', async () => {
    const select = render(<RenderSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(select.getByText('Select...')).toBeTruthy();
    userEvent.click(selectElement);
    await waitFor(() => expect(select.queryByRole('listbox')).toBeTruthy());
    fireEvent.click(select.getByText('Physics'));

    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.queryByText('Select...')).toBeFalsy();
    expect(select.getByText('Physics')).toBeTruthy();

    userEvent.click(selectElement);
    await waitFor(() => expect(select.queryByRole('listbox')).toBeTruthy());
    fireEvent.click(select.getByText('History'));
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.getByText('History')).toBeTruthy();
  });

  it('can select multiple options in multi select Select', async () => {
    const select = render(<RenderSelect multiSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(select.getByText('Select...')).toBeTruthy();
    userEvent.click(selectElement);
    await waitFor(() => expect(select.queryByRole('listbox')).toBeTruthy());
    fireEvent.click(select.getByText('Physics'));
    fireEvent.click(select.getByText('Science'));
    userEvent.click(document.body);

    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.queryByText('Select...')).toBeFalsy();
    expect(select.getByText('Physics, Science')).toBeTruthy();
  });

  it('closes options popup when user clicks outside of it', async () => {
    const select = render(<RenderSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(select.queryByRole('listbox')).toBeTruthy();
    userEvent.click(document.body);
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('false')
    );
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
  });

  it('renders with options popup open when select is set as default expanded', async () => {
    const select = render(<RenderSelect defaultExpanded />);

    expect(select.queryByRole('listbox')).toBeTruthy();
  });

  it('can close default expanded select', async () => {
    const select = render(<RenderSelect defaultExpanded />);

    userEvent.click(document.body);
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
  });

  it('can be navigated with a keyboard', async () => {
    const select = render(<RenderSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    selectElement.focus();
    expect(selectElement).toEqual(document.activeElement);
    expect(selectElement.getAttribute('aria-expanded')).toBe('false');
    userEvent.keyboard('[space]');

    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );
    const selectedOption1 = select.getByRole('option', {name: 'Physics'});

    expect(selectedOption1).toHaveFocus();
    expect(selectedOption1).toEqual(document.activeElement);
    userEvent.keyboard('[space]');
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.getByText('Physics')).toBeTruthy();
  });

  it('cannon be interacted with when disabled', async () => {
    const select = render(<RenderSelect disabled />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(selectElement.getAttribute('aria-disabled')).toEqual('true');

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('false');
    expect(select.queryByRole('listbox')).toBeFalsy();
  });

  it('has accessible label and description', () => {
    const label = 'Subject';
    const description = 'Choose your favorite one';
    const select = render(
      <div>
        <RenderSelect aria-label={label} aria-describedby="description" />
        <p id="description">{description}</p>
      </div>
    );

    expect(
      select.getByRole('combobox', {name: label, description})
    ).toBeTruthy();
  });
});
