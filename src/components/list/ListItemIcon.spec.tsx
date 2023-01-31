import * as React from 'react';
import {render} from '@testing-library/react';
import ListItemIcon from './ListItemIcon';

describe('<ListItemIcon>', () => {
  it('renders', () => {
    const listItemIcon = render(<ListItemIcon />);

    expect(listItemIcon.hasClass('sg-list__icon')).toEqual(true);
  });
  it('renders with small right spcing', () => {
    const listItemIcon = render(<ListItemIcon small />);

    expect(listItemIcon.hasClass('sg-list__icon--spacing-right-small')).toEqual(
      true
    );
  });
  it('renders children', () => {
    const children = <div>Text</div>;
    const listItemIcon = render(<ListItemIcon>{children}</ListItemIcon>);

    expect(listItemIcon.contains(children)).toEqual(true);
  });
  it('renders additional classes', () => {
    const list = render(<ListItemIcon className="m4l">42</ListItemIcon>);

    expect(list.hasClass('sg-list__icon')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});
