import * as React from 'react';
import PetitButton from './PetitButton';
import {render, within} from '@testing-library/react';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('PetitButton', () => {
  it('render', () => {
    const button = render(<PetitButton>Some text</PetitButton>);

    expect(button.getByRole('button', {name: 'Some text'})).toBeTruthy();
  });

  it('disabled', () => {
    const button = render(<PetitButton disabled>Some text</PetitButton>);

    expect(button.getByRole('button').hasAttribute('disabled')).toEqual(true);
  });

  describe('without `href`', () => {
    it('has a button role and an accessible label', () => {
      const label = 'Load more Mathematic questions';
      const button = render(
        <PetitButton aria-label={label}>Load more</PetitButton>
      );

      expect(
        button.getByRole('button', {
          name: label,
        })
      ).toBeTruthy();
    });

    it('is focusable', () => {
      const button = render(<PetitButton>Read more</PetitButton>);

      button.getByRole('button').focus();
      expect(button.getByRole('button').hasAttribute('disabled')).toEqual(true);
    });

    it('is has reset type', () => {
      const button = render(<PetitButton type="reset">Reset form</PetitButton>);

      expect(button.getByRole('button').getAttribute('type')).toEqual('reset');
    });

    it('is not focusable and clickable when disabled', () => {
      const handleOnClick = jest.fn();
      const label = 'Load more';
      const button = render(
        <PetitButton disabled onClick={handleOnClick}>
          {label}
        </PetitButton>
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
        <PetitButton onClick={handleOnClick}>{label}</PetitButton>
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

    it('informs about the loading state and is then disabled', () => {
      const label = 'Load more';
      const loadingAriaLabel = 'loading more';
      const button = render(
        <PetitButton
          loadingAriaLabel={loadingAriaLabel}
          loadingAriaLive="assertive"
          loading
        >
          {label}
        </PetitButton>
      );
      const status = button.getByRole('status');

      expect(status.getAttribute('aria-live')).toBe('assertive');
      expect(within(status).getByText(loadingAriaLabel)).toBeTruthy();
      expect(button.getByRole('button')).toHaveProperty('disabled', true);
    });
  });

  describe('with `href`', () => {
    it('has a link role and an accessible label', () => {
      const label = 'read more about products';
      const button = render(
        <PetitButton href="https://example.com/" aria-label={label}>
          Read more
        </PetitButton>
      );

      expect(
        button.getByRole('link', {
          name: label,
        })
      ).toBeTruthy();
      expect(button.getByRole('link').getAttribute('href')).toBe(
        'https://example.com/'
      );
    });

    it('is focusable', () => {
      const button = render(
        <PetitButton href="https://example.com/">Read more</PetitButton>
      );

      button.getByRole('link').focus();
      expect(button.getByRole('link')).toBe(document.activeElement);
    });

    it('is not focusable and clickable when disabled', () => {
      const label = 'read more';
      const onClick = jest.fn();
      const button = render(
        <PetitButton href="https://example.com/" disabled onClick={onClick}>
          {label}
        </PetitButton>
      );

      button.getByText(label).focus();
      expect(button.getByText(label)).not.toBe(document.activeElement);
      userEvent.click(button.getByText(label));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('informs about the opening in a new tab', () => {
      const label = 'read more';
      const newTabLabel = 'in new tab';
      const button = render(
        <PetitButton
          href="https://example.com/"
          target="_blank"
          newTabLabel={newTabLabel}
        >
          {label}
        </PetitButton>
      );

      expect(button.getByText(newTabLabel)).toBeTruthy();
    });
  });

  describe('a11y', () => {
    describe('without `href`', () => {
      it('should have no a11y violations', async () => {
        await testA11y(<PetitButton>Read more</PetitButton>);
      });

      it('should have no a11y violations when aria-label is provided', async () => {
        await testA11y(
          <PetitButton aria-label="read more about us">Read more</PetitButton>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(<PetitButton disabled>Read more</PetitButton>);
      });

      it('should have no a11y violations in loading state', async () => {
        await testA11y(<PetitButton loading>Read more</PetitButton>);
      });
    });
    describe('with `href`', () => {
      it('should have no a11y violations', async () => {
        await testA11y(
          <PetitButton href="https://example.com/">Read more</PetitButton>
        );
      });

      it('should have no a11y violations when aria-label is provided', async () => {
        await testA11y(
          <PetitButton
            href="https://example.com/"
            aria-label="read more about us"
          >
            Read more
          </PetitButton>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(
          <PetitButton href="https://example.com/" disabled>
            Read more
          </PetitButton>
        );
      });

      it('should have no a11y violations when opens in a new tab', async () => {
        await testA11y(
          <PetitButton href="https://example.com/" target="_blank">
            Read more
          </PetitButton>
        );
      });
    });
  });
});
