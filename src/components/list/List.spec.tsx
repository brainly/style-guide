import {render} from '@testing-library/react';
import * as React from 'react';
import List from './List';

describe('<List>', () => {
  it('renders', () => {
    const list = render(<List />);

    expect(list.queryByRole('list')).toBeTruthy();
  });

  it('renders with spaced elements', () => {
    const list = render(<List spaced />);

    expect(
      list.container.firstElementChild.classList.contains(
        'sg-list--spaced-elements'
      )
    ).toEqual(true);
  });

  it('renders additional classes', () => {
    const list = render(<List className="m4l" />);

    expect(list.container.firstElementChild.classList.contains('m4l')).toEqual(
      true
    );
  });
});
