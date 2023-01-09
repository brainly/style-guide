import * as React from 'react';
import {render} from '@testing-library/react';
import SubjectIcon from './SubjectIcon';
import {testA11y} from '../../axe';
describe('SubjectIcon', () => {
  it('should have an accessible title and img role', async () => {
    const type = 'art';
    const icon = render(<SubjectIcon type={type} />);
    expect(
      icon.getByRole('img', {
        name: type,
      })
    ).toBeTruthy();
  });
});
describe('SubjectIcon a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<SubjectIcon type="art" />);
  });
  it('should have no a11y violations when title is provided', async () => {
    await testA11y(<SubjectIcon type="art" title="Title" />);
  });
});
