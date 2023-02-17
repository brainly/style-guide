import * as React from 'react';
import {render} from '@testing-library/react';
import ListItem from './ListItem';

describe('<ListItem>', () => {
  it('renders', () => {
    const listItem = render(<ListItem />);

    expect(listItem.getByRole('listitem')).toBeTruthy();
  });

  it('renders children', () => {
    const children = <div>foo</div>;
    const listItem = render(<ListItem>{children}</ListItem>);

    expect(listItem.queryByText('foo')).toBeTruthy();
  });

  it('renders additional classes', () => {
    const list = render(<ListItem className="m4l">42</ListItem>);

    expect(list.baseElement.querySelector('.m4l')).toBeTruthy();
  });
});
