import * as React from 'react';
import Link, {LINK_ALIGN, LINK_SIZE, LINK_TRANSFORM} from './Link';
import {render} from '@testing-library/react';
import {TEXT_WEIGHT} from './textConsts';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('Link', () => {
  it('render', () => {
    const link = render(<Link href="test.com">Test</Link>);
    const linkNode = link.getByRole('link');

    expect(linkNode.getAttribute('href')).toEqual('test.com');
  });

  it('render Text', () => {
    const link = render(<Link href="test.com">Test</Link>);

    expect(link.getByText('Test')).toBeTruthy();
  });

  it('size is responsive prop', () => {
    const size = [LINK_SIZE.SMALL, LINK_SIZE.XXLARGE, null, LINK_SIZE.XXXLARGE];
    const component = render(
      <Link href="#" size={size}>
        Test
      </Link>
    );

    ['sg-text--small', 'md:sg-text--xxlarge', 'xl:sg-text--xxxlarge'].forEach(
      className => {
        expect(component.getByRole('link').classList.contains(className)).toBe(
          true
        );
      }
    );
  });

  it('unstyled', () => {
    const link = render(
      <Link href="#" unstyled>
        Test
      </Link>
    );

    const linkClasslist = link.getByRole('link').classList;

    expect(linkClasslist.contains('sg-text--link-unstyled')).toBeTruthy();
    expect(linkClasslist.contains('sg-text--link')).toBeFalsy();
  });

  it('weight is responsive prop', () => {
    const component = render(
      <Link
        weight={[TEXT_WEIGHT.BOLD, TEXT_WEIGHT.REGULAR, null, TEXT_WEIGHT.BOLD]}
        href="#"
      >
        Test
      </Link>
    );

    ['sg-text--bold', 'md:sg-text--regular', 'xl:sg-text--bold'].forEach(
      className => {
        expect(
          component.getByRole('link').classList.contains(className)
        ).toEqual(true);
      }
    );
  });

  it('transform is responsive prop', () => {
    const transform = [LINK_TRANSFORM.CAPITALIZE, LINK_TRANSFORM.LOWERCASE];
    const component = render(
      <Link href="#" transform={transform}>
        Test
      </Link>
    );

    ['sg-text--capitalize', 'md:sg-text--lowercase'].forEach(className => {
      expect(component.getByRole('link').classList.contains(className)).toBe(
        true
      );
    });
  });

  it('align is responsive prop', () => {
    const align = [LINK_ALIGN.CENTER, LINK_ALIGN.LEFT];
    const component = render(
      <Link href="#" align={align}>
        Test
      </Link>
    );

    ['sg-text--to-center', 'md:sg-text--to-left'].forEach(className => {
      expect(component.getByRole('link').classList.contains(className)).toBe(
        true
      );
    });
  });

  it('noWrap is responsive prop', () => {
    const noWrap = [true, false];
    const component = render(
      <Link href="#" noWrap={noWrap}>
        Test
      </Link>
    );

    ['sg-text--no-wrap', 'md:sg-text--wrap'].forEach(className => {
      expect(component.getByRole('link').classList.contains(className)).toBe(
        true
      );
    });
  });

  it('breakWords is responsive prop', () => {
    const breakWords = [true, false];
    const component = render(
      <Link href="#" breakWords={breakWords}>
        Test
      </Link>
    );

    ['sg-text--break-words', 'md:sg-text--word-break-normal'].forEach(
      className => {
        expect(component.getByRole('link').classList.contains(className)).toBe(
          true
        );
      }
    );
  });

  describe('as anchor', () => {
    it('has a link role and an accessible label', () => {
      const label = 'read more about products';
      const link = render(
        <Link href="https://example.com/" aria-label={label}>
          Read more
        </Link>
      );

      expect(
        link.getByRole('link', {
          name: label,
        })
      ).toBeTruthy();
    });

    it('is focusable', () => {
      const link = render(<Link href="https://example.com/">Read more</Link>);

      link.getByRole('link').focus();
      expect(link.getByRole('link')).toBe(document.activeElement);
    });

    it('is not focusable when disabled', () => {
      const label = 'read more';
      const link = render(
        <Link href="https://example.com/" disabled>
          {label}
        </Link>
      );

      link.getByText(label).focus();
      expect(link.getByText(label)).not.toBe(document.activeElement);
    });

    it('informs about the opening in a new tab', () => {
      const label = 'read more';
      const newTabLabel = 'in new tab';
      const link = render(
        <Link
          href="https://example.com/"
          target="_blank"
          newTabLabel={newTabLabel}
        >
          {label}
        </Link>
      );

      expect(link.getByText(newTabLabel)).toBeTruthy();
    });
  });

  describe('as button', () => {
    it('has a button role and an accessible label', () => {
      const label = 'read more about products';
      const link = render(
        <Link as="button" aria-label={label}>
          Read more
        </Link>
      );

      expect(
        link.getByRole('button', {
          name: label,
        })
      ).toBeTruthy();
    });

    it('is focusable', () => {
      const link = render(<Link as="button">Read more</Link>);

      link.getByRole('button').focus();
      expect(link.getByRole('button')).toBe(document.activeElement);
    });

    it('is not focusable when disabled', () => {
      const label = 'read more';
      const link = render(
        <Link as="button" disabled>
          {label}
        </Link>
      );

      link.getByText(label).focus();
      expect(link.getByText(label)).not.toBe(document.activeElement);
    });

    it('fires onClick on click, space and enter', () => {
      const handleOnClick = jest.fn();
      const label = 'read more';
      const link = render(
        <Link as="button" onClick={handleOnClick}>
          {label}
        </Link>
      );

      userEvent.click(
        link.getByRole('button', {
          name: label,
        })
      );
      expect(handleOnClick).toHaveBeenCalledTimes(1);
      link.getByText(label).focus();
      userEvent.keyboard('{space}');
      expect(handleOnClick).toHaveBeenCalledTimes(2);
      userEvent.keyboard('{enter}');
      expect(handleOnClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('a11y', () => {
    describe('as anchor', () => {
      it('should have no a11y violations', async () => {
        await testA11y(<Link href="https://example.com/">Read more</Link>);
      });

      it('should have no a11y violations when aria-label is provided', async () => {
        await testA11y(
          <Link href="https://example.com/" aria-label="read more about us">
            Read more
          </Link>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(
          <Link href="https://example.com/" disabled>
            Read more
          </Link>
        );
      });

      it('should have no a11y violations when opens in a new tab', async () => {
        await testA11y(
          <Link href="https://example.com/" target="_blank">
            Read more
          </Link>
        );
      });
    });

    describe('as button', () => {
      it('should have no a11y violations', async () => {
        await testA11y(<Link as="button">Read more about us</Link>);
      });

      it('should have no a11y violations when aria-label is provided', async () => {
        await testA11y(
          <Link as="button" aria-label="read more about us">
            Read more
          </Link>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(
          <Link as="button" disabled>
            Read more about us
          </Link>
        );
      });
    });
  });
});
