import * as React from 'react';
import {
  render,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectMenu from './SelectMenu';

export function RenderSelectMenu(props: {
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
    <SelectMenu
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

describe('<SelectMenu />', () => {
  it('renders SelectMenu in the default state', () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(select.getByText('Select...')).toBeTruthy();
    expect(selectElement.getAttribute('aria-expanded')).toBe('false');
    expect(selectElement.getAttribute('aria-disabled')).toBeFalsy();
    expect(selectElement.getAttribute('aria-invalid')).toBeFalsy();
  });

  it('opens options popup when select element is clicked', async () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeInTheDocument();

    expect(select.getByRole('listbox').getAttribute('id')).toBe(
      select.getByRole('combobox').getAttribute('aria-controls')
    );
    expect(
      within(select.getByRole('listbox')).getAllByRole('option').length
    ).toBeTruthy();
  });

  it('can select single option', async () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeInTheDocument();

    const option1 = select.getByRole('option', {name: 'Physics'});

    userEvent.click(option1);
    expect(option1.getAttribute('aria-selected')).toEqual('true');

    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));
    expect(select.queryByText('Select...')).toBeFalsy();
    expect(select.getByText('Physics')).toBeTruthy();

    userEvent.click(selectElement);

    const option2 = select.getByRole('option', {name: 'History'});

    userEvent.click(option2);
    expect(option2.getAttribute('aria-selected')).toEqual('true');
    expect(
      select
        .getByRole('option', {name: 'Physics'})
        .getAttribute('aria-selected')
    ).toEqual('false');

    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));
    expect(select.getByText('History')).toBeTruthy();

    userEvent.click(selectElement);
    expect(select.queryByRole('listbox')).toBeInTheDocument();

    expect(
      select
        .getByRole('option', {name: 'History check'})
        .getAttribute('aria-selected')
    ).toEqual('true');
  });

  it('can select multiple options in multi select Select', async () => {
    const select = render(<RenderSelectMenu multiSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(selectElement.getAttribute('aria-multiselectable')).toEqual('true');

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeInTheDocument();

    expect(select.container.getElementsByClassName('sg-checkbox').length).toBe(
      3
    );

    userEvent.click(select.getByText('Physics'));
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    userEvent.click(select.getByText('Science'));
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');

    userEvent.click(document.body);
    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));

    expect(select.queryByText('Select...')).toBeFalsy();
    expect(select.getByText('Physics, Science')).toBeTruthy();
  });

  it('closes options popup when user clicks outside of it', async () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(select.getByRole('listbox')).toBeInTheDocument();

    userEvent.click(document.body);
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('false')
    );
    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));
  });

  it('renders with options popup open when select is set as default expanded', async () => {
    const select = render(<RenderSelectMenu defaultExpanded />);

    expect(select.getByRole('listbox')).toBeInTheDocument();
  });

  it('can close default expanded select', async () => {
    const {queryByRole} = render(<RenderSelectMenu defaultExpanded />);

    userEvent.click(document.body);
    await waitForElementToBeRemoved(() => queryByRole('listbox'));
  });

  it('can be navigated with a keyboard', async () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    selectElement.focus();
    expect(selectElement).toEqual(document.activeElement);
    expect(selectElement.getAttribute('aria-expanded')).toBe('false');

    userEvent.keyboard('{space}');
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );
    const option1 = select.getByRole('option', {name: 'Physics'});

    expect(option1).toHaveFocus();
    expect(option1).toEqual(document.activeElement);

    userEvent.keyboard('{space}');
    expect(option1.getAttribute('aria-selected')).toEqual('true');
    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));

    expect(selectElement).toHaveFocus();
    expect(select.getByText('Physics')).toBeTruthy();

    userEvent.keyboard('{enter}');
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );

    const option2 = select.getByRole('option', {name: 'History'});

    option2.focus();
    expect(option2).toHaveFocus();

    userEvent.keyboard('{enter}');
    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));

    expect(select.getByText('History')).toBeTruthy();

    userEvent.keyboard('{space}');
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );

    const prevSelectedOption = select.getByRole('option', {name: 'Physics'});
    const currentlySelectedOption = select.getByRole('option', {
      name: 'History check',
    });

    expect(prevSelectedOption.getAttribute('aria-selected')).toEqual('false');
    expect(currentlySelectedOption.getAttribute('aria-selected')).toEqual(
      'true'
    );
  });

  it('cannot be interacted with when disabled', async () => {
    const select = render(<RenderSelectMenu disabled />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    expect(selectElement.getAttribute('aria-disabled')).toEqual('true');

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('false');
    expect(select.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('has accessible label and description', () => {
    const label = 'Subject';
    const description = 'Choose your favorite one';
    const select = render(
      <div>
        <RenderSelectMenu aria-label={label} aria-describedby="description" />
        <p id="description">{description}</p>
      </div>
    );

    expect(
      select.getByRole('combobox', {name: label, description})
    ).toBeTruthy();
  });
});
