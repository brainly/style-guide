import * as React from 'react';
import UnstyledButton from './UnstyledButton';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('UnstyledButton', () => {
  it('has a button role and an accessible label', () => {
    const button = render(<UnstyledButton>Some text</UnstyledButton>);

    expect(button.getByRole('button', {name: 'Some text'})).toBeInTheDocument();
  });

  it('disabled', () => {
    const button = render(<UnstyledButton disabled>Some text</UnstyledButton>);

    expect(button.getByRole('button').hasAttribute('disabled')).toEqual(true);
  });

  it('is focusable', () => {
    const button = render(<UnstyledButton>Read more</UnstyledButton>);

    button.getByRole('button').focus();
    expect(button.getByRole('button')).toBe(document.activeElement);
  });

  it('is not focusable and clickable when disabled', () => {
    const handleOnClick = jest.fn();
    const label = 'Load more';
    const button = render(
      <UnstyledButton disabled onClick={handleOnClick}>
        {label}
      </UnstyledButton>
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
      <UnstyledButton onClick={handleOnClick}>{label}</UnstyledButton>
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
    it('should have no a11y violations', async () => {
      await testA11y(<UnstyledButton>Read more</UnstyledButton>);
    });

    it('should have no a11y violations when aria-label is provided', async () => {
      await testA11y(
        <UnstyledButton aria-label="read more about us">
          Read more
        </UnstyledButton>
      );
    });

    it('should have no a11y violations when disabled', async () => {
      await testA11y(<UnstyledButton disabled>Read more</UnstyledButton>);
    });
  });
});
