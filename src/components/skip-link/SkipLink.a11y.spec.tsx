import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SkipLink from './SkipLink';
import {testA11y} from '../../axe';

const renderSkipLink = () =>
  render(<SkipLink id="main">skip to main content</SkipLink>);

describe('<SkipLink /> a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<SkipLink id="main">skip to main content</SkipLink>);
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
});