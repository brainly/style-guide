import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

import SkipLink from './SkipLink';

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    value: {
      href: '/',
      replace: () => undefined,
    },
    writable: true,
  });
});

const linkProps = {
  name: 'skip to main content',
  id: 'main',
};

const renderSkipLink = () =>
  render(<SkipLink id={linkProps.id}>skip to main content</SkipLink>);

describe('<SkipLink />', () => {
  it('renders single SkipLink', () => {
    renderSkipLink();

    expect(
      screen.getByRole('link', {name: linkProps.name})
    ).toBeInTheDocument();
  });

  it('creates link with proper href attribute', async () => {
    renderSkipLink();
    const link = screen.getByRole('link', {name: linkProps.name});

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `#${linkProps.id}`);
    // userEvent.keyboard('{enter}');
    // expect(window.location.href).toEqual('#main');
  });
});
