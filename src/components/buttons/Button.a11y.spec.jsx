import * as React from 'react';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import Button from './Button';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  describe('with `href`', () => {
    it('has a link role and an accessible label', () => {
      const label = 'read more about products';
      const link = render(
        <Button href="https://example.com/" aria-label={label}>
          Read more
        </Button>
      );

      expect(link.getByRole('link', {name: label})).toBeTruthy();
    });

    it('is focusable', () => {
      const link = render(
        <Button href="https://example.com/">Read more</Button>
      );

      link.getByRole('link').focus();

      expect(link.getByRole('link')).toBe(document.activeElement);
    });

    it('is not focusable and clickable when disabled', () => {
      const label = 'read more';
      const onClick = jest.fn();
      const link = render(
        <Button href="https://example.com/" disabled onClick={onClick}>
          {label}
        </Button>
      );

      link.getByText(label).focus();

      expect(link.getByText(label)).not.toBe(document.activeElement);

      userEvent.click(link.getByText(label));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('informs about the opening in a new tab', () => {
      const label = 'read more';
      const newTabLabel = 'in new tab';

      const link = render(
        <Button
          href="https://example.com/"
          target="_blank"
          newTabLabel={newTabLabel}
        >
          {label}
        </Button>
      );

      expect(link.getByText(newTabLabel)).toBeTruthy();
    });
  });

  describe('as button', () => {
    /* empty */
  });
});

describe('Button a11y', () => {
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

  describe('as button', () => {
    /* empty */
  });
});
