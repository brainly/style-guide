import * as React from 'react';
import ButtonLite from './ButtonLite';
import {render, within} from '@testing-library/react';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('ButtonLite', () => {
  it('render', () => {
    const button = render(<ButtonLite>Some text</ButtonLite>);

    expect(button.getByRole('button', {name: 'Some text'})).toBeInTheDocument();
  });

  it('disabled', () => {
    const button = render(<ButtonLite disabled>Some text</ButtonLite>);

    expect(button.getByRole('button')).toHaveProperty('disabled', true);
  });

  describe('without `href`', () => {
    it('has a button role and an accessible label', () => {
      const label = 'Load more Mathematic questions';
      const button = render(
        <ButtonLite aria-label={label}>Load more</ButtonLite>
      );

      expect(
        button.getByRole('button', {
          name: label,
        })
      ).toBeInTheDocument();
    });

    it('is focusable', () => {
      const button = render(<ButtonLite>Read more</ButtonLite>);

      button.getByRole('button').focus();
      expect(button.getByRole('button')).toBe(document.activeElement);
    });

    it('is has reset type', () => {
      const button = render(<ButtonLite type="reset">Reset form</ButtonLite>);

      expect(button.getByRole('button').getAttribute('type')).toEqual('reset');
    });

    it('is not focusable and clickable when disabled', () => {
      const handleOnClick = jest.fn();
      const label = 'Load more';
      const button = render(
        <ButtonLite disabled onClick={handleOnClick}>
          {label}
        </ButtonLite>
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
        <ButtonLite onClick={handleOnClick}>{label}</ButtonLite>
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
        <ButtonLite
          loadingAriaLabel={loadingAriaLabel}
          loadingAriaLive="assertive"
          loading
        >
          {label}
        </ButtonLite>
      );
      const status = button.getByRole('status');

      expect(status.getAttribute('aria-live')).toBe('assertive');
      expect(within(status).getByText(loadingAriaLabel)).toBeInTheDocument();
      expect(button.getByRole('button')).toHaveProperty('disabled', true);
    });
  });

  describe('with `href`', () => {
    it('has a link role and an accessible label', () => {
      const label = 'read more about products';
      const button = render(
        <ButtonLite href="https://example.com/" aria-label={label}>
          Read more
        </ButtonLite>
      );

      expect(
        button.getByRole('link', {
          name: label,
        })
      ).toBeInTheDocument();
      expect(button.getByRole('link').getAttribute('href')).toBe(
        'https://example.com/'
      );
    });

    it('is focusable', () => {
      const button = render(
        <ButtonLite href="https://example.com/">Read more</ButtonLite>
      );

      button.getByRole('link').focus();
      expect(button.getByRole('link')).toBe(document.activeElement);
    });

    it('is not focusable and clickable when disabled', () => {
      const label = 'read more';
      const onClick = jest.fn();
      const button = render(
        <ButtonLite href="https://example.com/" disabled onClick={onClick}>
          {label}
        </ButtonLite>
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
        <ButtonLite
          href="https://example.com/"
          target="_blank"
          newTabLabel={newTabLabel}
        >
          {label}
        </ButtonLite>
      );

      expect(button.getByText(newTabLabel)).toBeInTheDocument();
    });
  });

  describe('a11y', () => {
    describe('without `href`', () => {
      it('should have no a11y violations', async () => {
        await testA11y(<ButtonLite>Read more</ButtonLite>);
      });

      it('should have no a11y violations when aria-label is provided', async () => {
        await testA11y(
          <ButtonLite aria-label="read more about us">Read more</ButtonLite>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(<ButtonLite disabled>Read more</ButtonLite>);
      });

      it('should have no a11y violations in loading state', async () => {
        await testA11y(<ButtonLite loading>Read more</ButtonLite>);
      });
    });
    describe('with `href`', () => {
      it('should have no a11y violations', async () => {
        await testA11y(
          <ButtonLite href="https://example.com/">Read more</ButtonLite>
        );
      });

      it('should have no a11y violations when aria-label is provided', async () => {
        await testA11y(
          <ButtonLite
            href="https://example.com/"
            aria-label="read more about us"
          >
            Read more
          </ButtonLite>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(
          <ButtonLite href="https://example.com/" disabled>
            Read more
          </ButtonLite>
        );
      });

      it('should have no a11y violations when opens in a new tab', async () => {
        await testA11y(
          <ButtonLite href="https://example.com/" target="_blank">
            Read more
          </ButtonLite>
        );
      });
    });
  });
});
