import * as React from 'react';
import CardButton from './CardButton';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

describe('CardButton', () => {
  it('has a button role and an accessible label', () => {
    const button = render(<CardButton>Some text</CardButton>);

    expect(button.getByRole('button', {name: 'Some text'})).toBeInTheDocument();
  });

  it('disabled', () => {
    const button = render(<CardButton disabled>Some text</CardButton>);

    expect(button.getByRole('button').hasAttribute('disabled')).toEqual(true);
  });

  it('is focusable', () => {
    const button = render(<CardButton>Read more</CardButton>);

    button.getByRole('button').focus();
    expect(button.getByRole('button')).toBe(document.activeElement);
  });

  it('is not focusable and clickable when disabled', () => {
    const handleOnClick = jest.fn();
    const label = 'Load more';
    const button = render(
      <CardButton disabled onClick={handleOnClick}>
        {label}
      </CardButton>
    );

    button.getByText(label).focus();
    expect(button.getByText(label)).not.toBe(document.activeElement);
    userEvent.click(button.getByText(label));
    expect(handleOnClick).not.toHaveBeenCalled();
  });

  it('fires onClick on click, space and enter', () => {
    const handleOnClick = jest.fn();
    const label = 'Load more';
    const button = render(
      <CardButton onClick={handleOnClick}>{label}</CardButton>
    );

    userEvent.click(
      button.getByRole('button', {
        name: label,
      })
    );
    expect(handleOnClick).toHaveBeenCalledTimes(1);
    button.getByText(label).focus();
    userEvent.keyboard('{space}');
    expect(handleOnClick).toHaveBeenCalledTimes(2);
    userEvent.keyboard('{enter}');
    expect(handleOnClick).toHaveBeenCalledTimes(3);
  });

  describe('a11y', () => {
    it('has no a11y violations', async () => {
      expect(await testA11y(<CardButton>Some text</CardButton>));
    });

    it('should have no a11y violations when aria-label is provided', async () => {
      await testA11y(
        <CardButton aria-label="Some label">Some text</CardButton>
      );
    });

    it('has no a11y violations when disabled', async () => {
      await testA11y(<CardButton disabled>Some text</CardButton>);
    });
  });
});
