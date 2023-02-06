import * as React from 'react';
import {render} from '@testing-library/react';
import ListItemIcon from './ListItemIcon';

describe('<ListItemIcon>', () => {
  it('renders', () => {
    const listItemIcon = render(<ListItemIcon />);

    expect(
      listItemIcon.container.firstElementChild.classList.contains(
        'sg-list__icon'
      )
    ).toEqual(true);
  });

  it('renders with small right spcing', () => {
    const listItemIcon = render(<ListItemIcon small />);

    expect(
      listItemIcon.container.firstElementChild.classList.contains(
        'sg-list__icon--spacing-right-small'
      )
    ).toEqual(true);
  });

  it('renders children', () => {
    const children = <div>foo</div>;
    const listItemIcon = render(<ListItemIcon>{children}</ListItemIcon>);

    expect(listItemIcon.queryByText('foo')).toBeTruthy();
  });

  it('renders additional classes', () => {
    const listItemIcon = render(
      <ListItemIcon className="m4l">42</ListItemIcon>
    );

    expect(
      listItemIcon.container.firstElementChild.classList.contains('m4l')
    ).toEqual(true);
  });
});
