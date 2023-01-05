import * as React from 'react';
import {render} from '@testing-library/react';
import Icon from './Icon';
import {testA11y} from '../../axe';
describe('Icon', () => {
  it('should have an accessible title and img role', async () => {
    const type = 'search';
    const icon = render(<Icon type={type} />);
    expect(
      icon.getByRole('img', {
        name: type,
      })
    ).toBeTruthy();
  });
  it('should have an accessible description', async () => {
    const type = 'search';
    const description = 'desc desc desc';
    const icon = render(<Icon type={type} description={description} />);
    expect(icon.getByText(description)).toBeTruthy();
  });
});
describe('Icon a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Icon type="search" />);
  });
  it('should have no a11y violations when title is provided', async () => {
    await testA11y(<Icon type="search" title="Title" />);
  });
  it('should have no a11y violations when description is provided', async () => {
    await testA11y(<Icon type="search" description="description" />);
  });
});