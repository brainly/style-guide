import {render} from '@testing-library/react';
import * as React from 'react';
import List from './List';
import {testA11y} from '../../axe';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';

describe('List', () => {
  it('renders', () => {
    const list = render(<List />);

    expect(list.getByRole('list')).toBeTruthy();
  });

  it('renders additional classes', () => {
    const list = render(<List className="m4l" />);

    expect(list.baseElement.querySelector('.m4l')).toBeTruthy();
  });

  it('should have role "list" and "listitem"', () => {
    const list = render(
      <List>
        <ListItem>item</ListItem>
      </List>
    );

    expect(list.getByRole('list')).toBeTruthy();
    expect(list.getByRole('listitem')).toBeTruthy();
  });

  it('should be unordered', () => {
    const list = render(
      <List>
        <ListItem>item</ListItem>
      </List>
    );

    expect(list.getByRole('list').tagName).toBe('UL');
  });

  it('should be ordered', () => {
    const list = render(
      <List ordered>
        <ListItem>item</ListItem>
      </List>
    );

    expect(list.getByRole('list').tagName).toBe('OL');
  });

  it('should have an accessible name', () => {
    const name = 'name';
    const list = render(
      <List aria-label={name}>
        <ListItem>item</ListItem>
      </List>
    );

    expect(
      list.getByRole('list', {
        name,
      })
    ).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(
        <List>
          <ListItem>item</ListItem>
        </List>
      );
    });

    it('should have no a11y violations when aria-label is provided', async () => {
      await testA11y(
        <List aria-label="name">
          <ListItem>item</ListItem>
        </List>
      );
    });

    it('should have no a11y violations when ListItemIcon is used', async () => {
      await testA11y(
        <List>
          <ListItem>
            <ListItemIcon>x</ListItemIcon>
            item
          </ListItem>
        </List>
      );
    });
  });
});
