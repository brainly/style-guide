import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import SkipNav from './SkipNav';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

const linkProps = {
  name: 'skip to main content',
  href: '#main',
};

describe('<SkipLink /> a11y', () => {
  it('should have no a11y violations when link, label, imgSrc and alt are provided', async () => {
    await testA11y(<SkipNav links={linkProps} />);
  });

  it('should be focusable itself', () => {
    render(<SkipNav links={linkProps} />);

    const link = screen.getByRole('link', {name: linkProps.name});

    expect(link).not.toHaveFocus();
    userEvent.tab();
    expect(link).toHaveFocus();
  });

  it('should be focusable', () => {
    render(<SkipNav links={linkProps} />);

    const link = screen.getByRole('link', {name: linkProps.name});

    expect(link).not.toHaveFocus();
    userEvent.tab();
    expect(link).toHaveFocus();
  });
});
