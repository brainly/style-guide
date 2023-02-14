import * as React from 'react';
import SubjectIcon, {TYPE, SIZE, ICON_COLOR} from './SubjectIcon';
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

    expect(icon.queryByRole('img')).toBeTruthy();
    expect(icon.container.firstElementChild.querySelector('use')).toBeTruthy();
  });

  it('type passed to xlink:href', () => {
    const type = TYPE.ACCOUNTANCY;
    const icon = render(<SubjectIcon type={type} />);

    expect(
      icon.container.firstElementChild
        .querySelector('use')
        .getAttribute('xlink:href')
    ).toEqual(`#icon-subject-${type}`);
  });

  it('size', () => {
    const size = SIZE.SMALL;
    const type = TYPE.OTHERLANGUAGES;
    const icon = render(<SubjectIcon type={type} size={size} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        `sg-subject-icon--${size}`
      )
    ).toEqual(true);
  });

  it('mono', () => {
    const type = TYPE.OTHERLANGUAGES;
    const icon = render(
      <SubjectIcon type={type} monoColor={ICON_COLOR['icon-white']} />
    );

    expect(
      icon.container.firstElementChild
        .querySelector('use')
        .getAttribute('xlink:href')
    ).toEqual(`#icon-subject-mono-${type}`);
  });

  it('normal size', () => {
    const type = TYPE.OTHERLANGUAGES;
    const icon = render(<SubjectIcon type={type} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        'sg-subject-icon--normal'
      )
    ).toEqual(false);
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
