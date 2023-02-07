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

  test('render', () => {
    const icon = render(<SubjectIcon type={TYPE.ACCOUNTANCY} />);

    expect(icon.queryByRole('img')).toBeTruthy();
    expect(icon.container.firstElementChild.querySelector('use')).toBeTruthy();
  });

  test('type passed to xlink:href', () => {
    const type = TYPE.ACCOUNTANCY;
    const icon = render(<SubjectIcon type={type} />);

    expect(
      icon.container.firstElementChild
        .querySelector('use')
        .getAttribute('xlink:href')
    ).toEqual(`#icon-subject-${type}`);
  });

  test('size', () => {
    const size = SIZE.SMALL;
    const type = TYPE.OTHERLANGUAGES;
    const icon = render(<SubjectIcon type={type} size={size} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        `sg-subject-icon--${size}`
      )
    ).toEqual(true);
  });

  test('mono', () => {
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

  test('normal size', () => {
    const type = TYPE.OTHERLANGUAGES;
    const icon = render(<SubjectIcon type={type} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        'sg-subject-icon--normal'
      )
    ).toEqual(false);
  });

  it('should have no a11y violations', async () => {
    await testA11y(<SubjectIcon type="art" />);
  });

  it('should have no a11y violations when title is provided', async () => {
    await testA11y(<SubjectIcon type="art" title="Title" />);
  });
});
