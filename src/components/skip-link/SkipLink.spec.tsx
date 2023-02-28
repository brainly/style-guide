import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SkipLink from './SkipLink';
import {testA11y} from '../../axe';

const linkProps = {
  name: 'skip to main content',
  id: 'main',
};

const renderSkipLink = () =>
  render(<SkipLink id={linkProps.id}>skip to main content</SkipLink>);

describe('SkipLink', () => {
  it('renders single SkipLink', () => {
    renderSkipLink();
    expect(
      screen.getByRole('link', {
        name: linkProps.name,
      })
    ).toBeInTheDocument();
  });

  it('creates link with proper href attribute', async () => {
    renderSkipLink();
    const link = screen.getByRole('link', {
      name: linkProps.name,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `#${linkProps.id}`);
  });

  it('should be focusable', () => {
    renderSkipLink();
    const link = screen.getByRole('link', {
      name: /skip to main content/i,
    });

    expect(link).not.toHaveFocus();
    link.focus();
    expect(link).toHaveFocus();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<SkipLink id="main">skip to main content</SkipLink>);
    });
  });
});
