import * as React from 'react';
import {render} from '@testing-library/react';
import ListItem from './ListItem';

describe('<ListItem>', () => {
  it('renders', () => {
    const listItem = render(<ListItem />);

    expect(listItem.hasClass('sg-list__element')).toEqual(true);
  });
  it('renders children', () => {
    const children = <div>Text</div>;
    const listItem = render(<ListItem>{children}</ListItem>);

    expect(listItem.contains(children)).toEqual(true);
  });
  it('renders additional classes', () => {
    const list = render(<ListItem className="m4l">42</ListItem>);

    expect(list.hasClass('sg-list__element')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});
