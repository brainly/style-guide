import * as React from 'react';
import {render, waitFor, fireEvent, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectMenu, {SelectMenuOptionType} from './SelectMenu';
import {testA11y} from '../../axe';

export function RenderSelectMenu(props: {
  multiSelect?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  selected?: Array<SelectMenuOptionType>;
}) {
  const {selected, ...restProps} = props;
  const [selectedOptions, setSelectedOptions] = React.useState(selected || []);
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
      {...restProps}
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
    select.findByRole('listbox');
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
    await select.findByRole('listbox');
    fireEvent.click(select.getByText('Physics'));

    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.queryByText('Select...')).toBeFalsy();
    expect(select.getByText('Physics')).toBeTruthy();

    userEvent.click(selectElement);
    await select.findByRole('listbox');
    fireEvent.click(select.getByText('History'));
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.getByText('History')).toBeTruthy();

    userEvent.click(selectElement);
    await waitFor(() => expect(select.queryByRole('listbox')).toBeTruthy());
    expect(
      within(select.getByRole('option', {selected: true})).getByText('History')
    ).toBeTruthy();
  });

  it('can select multiple options in multi select Select', async () => {
    const select = render(<RenderSelectMenu multiSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    await select.findByRole('listbox');
    expect(
      select.getByRole('listbox').getAttribute('aria-multiselectable')
    ).toBeTruthy();
    fireEvent.click(select.getByText('Physics'));
    fireEvent.click(select.getByText('Science'));
    userEvent.click(document.body);

    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.queryByText('Select...')).toBeFalsy();
    expect(select.getByText('Physics, Science')).toBeTruthy();
  });

  it('closes options popup when user clicks outside of it', async () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    select.findByRole('listbox');
    userEvent.click(document.body);
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('false')
    );
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
  });

  it('renders with options popup open when select is set as default expanded', async () => {
    const select = render(<RenderSelectMenu defaultExpanded />);

    select.findByRole('listbox');
  });

  it('can close default expanded select', async () => {
    const select = render(<RenderSelectMenu defaultExpanded />);

    userEvent.click(document.body);
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
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
    const selectedOption1 = select.getByRole('option', {name: 'Physics'});

    expect(selectedOption1).toHaveFocus();
    expect(selectedOption1).toEqual(document.activeElement);
    userEvent.keyboard('{space}');
    expect(selectedOption1.getAttribute('aria-selected')).toEqual('true');
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.getByText('Physics')).toBeTruthy();

    expect(selectElement).toHaveFocus();
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    userEvent.keyboard('{Enter}');
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );

    select.getByRole('option', {name: 'History'}).focus();
    userEvent.keyboard('{enter}');
    await waitFor(() => expect(select.queryByRole('listbox')).toBeFalsy());
    expect(select.getByText('History')).toBeTruthy();

    userEvent.keyboard('{space}');
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );

    const prevSelectedOption = select.getByRole('option', {name: 'Physics'});
    const currentlySelectedOption = select.getByRole('option', {
      name: 'History',
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
    expect(select.queryByRole('listbox')).toBeFalsy();
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

  describe('a11y', () => {
    it('should have no a11y violations when it is collapsed', async () => {
      await testA11y(<RenderSelectMenu aria-label="Subject" />);
    });

    it('should have no a11y violations when it is expanded', async () => {
      await testA11y(
        <RenderSelectMenu aria-label="Subject" defaultExpanded />,
        {
          rules: {'aria-required-children': {enabled: false}}, // option should be a direct child of listbox, but is nested in role="none" (it works for VO & Chrome)
        }
      );
    });

    it('should have no a11y violations when it is collapsed and selected', async () => {
      await testA11y(
        <RenderSelectMenu
          aria-label="Subject"
          selected={[{value: 'physics', label: 'Physics'}]}
        />
      );
    });

    it('should have no a11y violations when it is expanded', async () => {
      await testA11y(
        <RenderSelectMenu
          aria-label="Subject"
          defaultExpanded
          selected={[{value: 'physics', label: 'Physics'}]}
        />,
        {
          rules: {'aria-required-children': {enabled: false}}, // option should be a direct child of listbox, but is nested in role="none" (it works for VO & Chrome)
        }
      );
    });

    it('should have no a11y violations when it is expanded, selected and has mutiselect', async () => {
      await testA11y(
        <RenderSelectMenu
          aria-label="Subject"
          defaultExpanded
          multiSelect
          selected={[
            {value: 'physics', label: 'Physics'},
            {value: 'history', label: 'History'},
          ]}
        />,
        {
          rules: {
            'aria-required-children': {enabled: false}, // option should be a direct child of listbox, but is nested in role="none" (it works for VO & Chrome)
            'nested-interactive': {enabled: false}, // checkboxes have display:none
          },
        }
      );
    });

    it('should have no a11y violations when it is collapsed and invalid', async () => {
      await testA11y(<RenderSelectMenu aria-label="Subject" invalid />);
    });

    it('should have no a11y violations when it is collapsed and disabled', async () => {
      await testA11y(<RenderSelectMenu aria-label="Subject" invalid />);
    });
  });
});
