import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import SkipNav from './SkipNav';

const linkProps = {
  name: 'skip to main content',
  href: '#main',
};

const linksProps = [
  {name: 'skip to main content', href: '#main'},
  {name: 'skip to secondary content', href: '#secondary'},
  {name: 'skip to tertiary content', href: '#tertiary'},
];

describe('<SkipNav />', () => {
  it('renders single SkipLink', () => {
    render(<SkipNav links={linkProps} />);
    expect(screen.getByTestId('skip_link')).toBeInTheDocument();

    expect(
      screen.getByRole('link', {name: linkProps.name})
    ).toBeInTheDocument();
  });

  it('renders multiple links when array passed', () => {
    render(<SkipNav links={linksProps} />);
    expect(screen.getByTestId('skip_link')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('changes location accordingly', async () => {
    render(<SkipNav links={linkProps} />);

    const link = screen.getByRole('link', {name: linkProps.name});

    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', linkProps.href);
  });
});
