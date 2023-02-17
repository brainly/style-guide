import * as React from 'react';
import {render} from '@testing-library/react';
import ListItemIcon from './ListItemIcon';

describe('ListItemIcon', () => {
  it('renders', () => {
    const children = <div>foo</div>;
    const listItemIcon = render(<ListItemIcon>{children}</ListItemIcon>);

    expect(listItemIcon.queryByText('foo')).toBeTruthy();
  });

  it('renders additional classes', () => {
    const listItemIcon = render(
      <ListItemIcon className="m4l">42</ListItemIcon>
    );

    expect(listItemIcon.baseElement.querySelector('.m4l')).toBeTruthy();
  });
});
