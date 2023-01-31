import {render} from '@testing-library/react';
import * as React from 'react';
import List from './List';

describe('<List>', () => {
  it('renders', () => {
    const list = render(<List />);

    expect(list.hasClass('sg-list')).toEqual(true);
  });
  it('renders with spaced elements', () => {
    const list = render(<List spaced />);

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(true);
  });
  test('renders with default spacing', () => {
    const list = render(<List />);

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(false);
  });
  it('renders additional classes', () => {
    const list = render(<List className="m4l" />);

    expect(list.hasClass('sg-list')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});
