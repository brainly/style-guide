import * as React from 'react';
import ProgressBar from './ProgressBar';

import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import '@testing-library/jest-dom';

describe('<ProgressBar />', () => {
  it('renders correctly with progressbar role', () => {
    const progressBar = render(<ProgressBar value={4} />);

    expect(progressBar.getByRole('progressbar')).toBeTruthy();
  });

  it('renders correctly without border radius', () => {
    const progressBar = render(<ProgressBar value={4} noBorderRadius />);

    expect(
      progressBar.getByRole('progressbar').getAttribute('class')
    ).toContain('sg-progress-bar--no-border-radius');
  });

  it('renders correctly with invisible track', () => {
    const progressBar = render(<ProgressBar value={4} invisibleTrack />);

    expect(
      progressBar.getByRole('progressbar').getAttribute('class')
    ).toContain('sg-progress-bar--invisible-track');
  });

  it('has an accessible name', () => {
    const name = 'registration form';
    const progressBar = render(<ProgressBar value={4} aria-label={name} />);

    expect(progressBar.getByRole('progressbar', {name})).toBeTruthy();
  });

  it('provides min, max, and current value', () => {
    const values = {
      value: 4,
      minValue: 2,
      maxValue: 8,
      textValue: 'step 4 of 8',
    };
    const progressBar = render(<ProgressBar {...values} />);

    expect(
      progressBar.getByRole('progressbar').getAttribute('aria-valuenow')
    ).toBe(String(values.value));
    expect(
      progressBar.getByRole('progressbar').getAttribute('aria-valuetext')
    ).toBe(values.textValue);
    expect(
      progressBar.getByRole('progressbar').getAttribute('aria-valuemin')
    ).toBe(String(values.minValue));
    expect(
      progressBar.getByRole('progressbar').getAttribute('aria-valuemax')
    ).toBe(String(values.maxValue));
  });
});

describe('<ProgressBar/> accessibility', () => {
  it('should have no a11y violations when aria-label is provided', async () => {
    const name = 'registration form';

    await testA11y(<ProgressBar value={4} aria-label={name} />);
  });

  it('should have no a11y violations when values are provided', async () => {
    const values = {
      value: 4,
      minValue: 2,
      maxValue: 8,
    };

    await testA11y(<ProgressBar {...values} aria-label="name" />);
  });
});
