import * as React from 'react';
import {render, within} from '@testing-library/react';
import {testA11y} from '../../axe';
import Button from './Button';
import userEvent from '@testing-library/user-event';
describe('Button', () => {
  describe('without `href`', () => {
    it('has a button role and an accessible label', () => {
      const label = 'Load more Mathematic questions';
      const button = render(
        <Button as="button" aria-label={label}>
          Load more
        </Button>
      );
      expect(
        button.getByRole('button', {
          name: label,
        })
      ).toBeTruthy();
    });
    it('is focusable', () => {
      const button = render(<Button as="button">Read more</Button>);
      button.getByRole('button').focus();
      expect(button.getByRole('button')).toBe(document.activeElement);
    });
    it('is not focusable and clickable when disabled', () => {
      const handleOnClick = jest.fn();
      const label = 'Load more';
      const button = render(
        <Button as="button" disabled onClick={handleOnClick}>
          {label}
        </Button>
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
        <Button as="button" onClick={handleOnClick}>
          {label}
        </Button>
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
        <Button
          loadingAriaLabel={loadingAriaLabel}
          loadingAriaLive="assertive"
          loading
        >
          {label}
        </Button>
      );
      const status = button.getByRole('status');
      expect(status.getAttribute('aria-live')).toBe('assertive');
      expect(within(status).getByText(loadingAriaLabel)).toBeTruthy();
      expect(button.getByRole('button').disabled).toBeTruthy();
    });
  });
  describe('with `href`', () => {
    it('has a link role and an accessible label', () => {
      const label = 'read more about products';
      const button = render(
        <Button href="https://example.com/" aria-label={label}>
          Read more
        </Button>
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
        <Button href="https://example.com/">Read more</Button>
      );
      button.getByRole('link').focus();
      expect(button.getByRole('link')).toBe(document.activeElement);
    });
    it('is not focusable and clickable when disabled', () => {
      const label = 'read more';
      const onClick = jest.fn();
      const button = render(
        <Button href="https://example.com/" disabled onClick={onClick}>
          {label}
        </Button>
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
        <Button
          href="https://example.com/"
          target="_blank"
          newTabLabel={newTabLabel}
        >
          {label}
        </Button>
      );
      expect(button.getByText(newTabLabel)).toBeTruthy();
    });
  });
  describe('with `toggle`', () => {
    it('has a button role and an accessible label', () => {
      const button = render(
        <Button toggle="red" type="button" aria-pressed="true">
          Thanks
        </Button>
      );
      expect(button.getByRole('button').getAttribute('type')).toBe('button');
      expect(
        button.getByRole('button').getAttribute('aria-pressed')
      ).toBeTruthy();
    });
  });
});
describe('Button a11y', () => {
  describe('without `href`', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Button>Read more</Button>);
    });
    it('should have no a11y violations when aria-label is provided', async () => {
      await testA11y(
        <Button aria-label="read more about us">Read more</Button>
      );
    });
    it('should have no a11y violations when disabled', async () => {
      await testA11y(<Button disabled>Read more</Button>);
    });
    it('should have no a11y violations in loading state', async () => {
      await testA11y(<Button loading>Read more</Button>);
    });
  });
  describe('with `href`', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Button href="https://example.com/">Read more</Button>);
    });
    it('should have no a11y violations when aria-label is provided', async () => {
      await testA11y(
        <Button href="https://example.com/" aria-label="read more about us">
          Read more
        </Button>
      );
    });
    it('should have no a11y violations when disabled', async () => {
      await testA11y(
        <Button href="https://example.com/" disabled>
          Read more
        </Button>
      );
    });
    it('should have no a11y violations when opens in a new tab', async () => {
      await testA11y(
        <Button href="https://example.com/" target="_blank">
          Read more
        </Button>
      );
    });
  });
  describe('with `toggle`', () => {
    it('should have no a11y violations', async () => {
      await testA11y(
        <Button toggle="red" type="button" aria-pressed="true">
          Thanks
        </Button>
      );
    });
  });
});