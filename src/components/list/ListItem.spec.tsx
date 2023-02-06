import * as React from 'react';
import {render} from '@testing-library/react';
import ListItem from './ListItem';

describe('<ListItem>', () => {
  it('renders', () => {
    const listItem = render(<ListItem />);

    expect(listItem.queryByRole('listitem')).toBeTruthy();
  });

  it('renders children', () => {
    const children = <div>foo</div>;
    const listItem = render(<ListItem>{children}</ListItem>);

    expect(listItem.queryByText('foo')).toBeTruthy();
  });

  it('renders additional classes', () => {
    const list = render(<ListItem className="m4l">42</ListItem>);

    expect(list.container.firstElementChild.classList.contains('m4l')).toEqual(
      true
    );
  });
});
