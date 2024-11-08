import * as React from 'react';
import Dropdown from './Dropdown';
import {fireEvent, render} from '@testing-library/react';

const testItems = [
  {
    label: 'text-1',
    url: 'url-1',
  },
  {
    label: 'text-2',
    url: 'url-2',
  },
  {
    label: 'text-3',
    url: 'url-3',
  },
];
const testProps = {
  links: testItems,
  name: 'brainly',
};

describe('<Dropdown />', () => {
  it('should render name', () => {
    const component = render(<Dropdown {...testProps} />);

    expect(component.queryByText(testProps.name)).toBeTruthy();
  });

  it('should render links with proper data', () => {
    const component = render(<Dropdown {...testProps} />);

    // @ts-expect-error TS2345
    fireEvent.click(component.container.firstElementChild);

    expect(component.getAllByRole('link')[0].getAttribute('href')).toEqual(
      testItems[0].url
    );
  });

  it('should not be open by default', () => {
    const component = render(<Dropdown {...testProps} />);

    expect(component.queryByRole('link')).toBeFalsy();
  });

  it('should open dropdown on click', () => {
    const component = render(<Dropdown {...testProps} />);

    // @ts-expect-error TS2345
    fireEvent.click(component.container.firstElementChild);
    expect(component.getAllByRole('link')).toHaveLength(3);
  });

  it('should close dropdown when click outside', () => {
    const component = render(<Dropdown {...testProps} />);

    // @ts-expect-error TS2345
    fireEvent.click(component.container.firstElementChild);
    expect(component.getAllByRole('link')).toHaveLength(3);

    fireEvent.click(component.baseElement);
    expect(component.queryByRole('link')).toBeFalsy();
  });

  it('should call onSelectHanlder when link is clicked', () => {
    const onItemSelect = jest.fn();
    const component = render(
      <Dropdown {...testProps} onItemSelect={onItemSelect} />
    );

    // @ts-expect-error TS2345
    fireEvent.click(component.container.firstElementChild);
    const link = component.getAllByRole('link')[0];

    fireEvent.click(link);
    expect(onItemSelect).toHaveBeenCalledTimes(1);
    expect(onItemSelect).toHaveBeenCalledWith(expect.anything(), {
      label: 'text-1',
      url: 'url-1',
    });
  });
});
