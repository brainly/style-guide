import * as React from 'react';
import SubjectIcon, {TYPE} from './SubjectIcon';
import {render} from '@testing-library/react';
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

  it('render', () => {
    const icon = render(<SubjectIcon type={TYPE.ACCOUNTANCY} />);

    expect(icon.getByRole('img')).toBeTruthy();
    // @ts-ignore TS18047
    expect(icon.container.firstElementChild.querySelector('use')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<SubjectIcon type="art" />);
    });

    it('should have no a11y violations when title is provided', async () => {
      await testA11y(<SubjectIcon type="art" title="Title" />);
    });
  });
});
