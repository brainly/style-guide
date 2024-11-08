import * as React from 'react';
import {
  render,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react';
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
  // @ts-ignore TS7006
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

    expect(select.getByText('Select...')).toBeInTheDocument();

    expect(selectElement.getAttribute('aria-expanded')).toEqual('false');
    expect(selectElement.getAttribute('aria-invalid')).toBeNull();
    expect(selectElement.getAttribute('aria-disabled')).toBeNull();
  });

  xit('opens options popup when select element is clicked', async () => {
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
    ).toBe(3);
  });

  xit('can select single option', async () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeInTheDocument();

    const option1 = select.getByRole('option', {name: 'Physics'});

    userEvent.click(option1);
    expect(option1.getAttribute('aria-selected')).toEqual('true');

    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));
    expect(select.queryByText('Select...')).not.toBeInTheDocument();
    expect(
      within(select.getByRole('combobox')).getByText('Physics')
    ).toBeInTheDocument();

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

    expect(
      within(select.getByRole('combobox')).getByText('History')
    ).toBeInTheDocument();

    userEvent.click(selectElement);
    expect(select.queryByRole('listbox')).toBeInTheDocument();

    expect(
      select
        .getByRole('option', {name: 'History'})
        .getAttribute('aria-selected')
    ).toEqual('true');
  });

  xit('can select multiple options in multi select Select', async () => {
    const select = render(<RenderSelectMenu multiSelect />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.click(selectElement);
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    expect(select.queryByRole('listbox')).toBeInTheDocument();
    expect(
      select.getByRole('listbox').getAttribute('aria-multiselectable')
    ).toBe('true');
    expect(select.container.getElementsByClassName('sg-checkbox').length).toBe(
      3
    );

    userEvent.click(select.getByText('Physics'));
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');
    userEvent.click(select.getByText('Science'));
    expect(selectElement.getAttribute('aria-expanded')).toEqual('true');

    userEvent.click(document.body);
    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));

    expect(select.queryByText('Select...')).not.toBeInTheDocument();
    expect(
      within(select.getByRole('combobox')).getByText('Physics, Science')
    ).toBeInTheDocument();
  });

  xit('closes options popup when user clicks outside of it', async () => {
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

  xit('can close default expanded select', async () => {
    const {queryByRole} = render(<RenderSelectMenu defaultExpanded />);

    userEvent.click(document.body);
    await waitForElementToBeRemoved(() => queryByRole('listbox'));
  });

  it('can be navigated with a keyboard', async () => {
    const select = render(<RenderSelectMenu />);
    const selectElement = select.getByRole('combobox') as HTMLElement;

    userEvent.tab();
    expect(selectElement).toEqual(document.activeElement);
    expect(selectElement.getAttribute('aria-expanded')).toBe('false');

    userEvent.keyboard('{space}');
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );
    const option1 = select.getByRole('option', {name: 'Physics'});

    userEvent.tab();

    expect(option1).toHaveFocus();
    expect(option1).toEqual(document.activeElement);

    userEvent.keyboard('{space}');
    expect(option1.getAttribute('aria-selected')).toEqual('true');
    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));

    expect(selectElement).toHaveFocus();
    expect(
      within(select.getByRole('combobox')).getByText('Physics')
    ).toBeInTheDocument();

    userEvent.keyboard('{enter}');
    await waitFor(() =>
      expect(selectElement.getAttribute('aria-expanded')).toEqual('true')
    );

    const option2 = select.getByRole('option', {name: 'History'});

    option2.focus();
    expect(option2).toHaveFocus();

    userEvent.keyboard('{enter}');
    await waitForElementToBeRemoved(() => select.queryByRole('listbox'));
    expect(
      within(select.getByRole('combobox')).getByText('History')
    ).toBeInTheDocument();

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
    ).toBeInTheDocument();
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
