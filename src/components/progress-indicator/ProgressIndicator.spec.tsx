import * as React from 'react';
import ProgressIndicator from './ProgressIndicator';

import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import '@testing-library/jest-dom';

describe('<ProgressIndicator />', () => {
  it('renders correctly with progressbar role', () => {
    const progressIndicator = render(<ProgressIndicator value={4} />);

    expect(progressIndicator.getByRole('progressbar')).toBeTruthy();
  });

  it('renders correctly without border radius', () => {
    const progressIndicator = render(
      <ProgressIndicator value={4} noBorderRadius />
    );

    expect(
      progressIndicator.getByRole('progressbar').getAttribute('class')
    ).toContain('sg-progress-indicator--no-border-radius');
  });

  it('renders correctly with invisible track', () => {
    const progressIndicator = render(
      <ProgressIndicator value={4} invisibleTrack />
    );

    expect(
      progressIndicator.getByRole('progressbar').getAttribute('class')
    ).toContain('sg-progress-indicator--invisible-track');
  });

  it('has an accessible name', () => {
    const name = 'registration form';
    const progressIndicator = render(
      <ProgressIndicator value={4} aria-label={name} />
    );

    expect(progressIndicator.getByRole('progressbar', {name})).toBeTruthy();
  });

  it('provides min, max, and current value', () => {
    const values = {
      value: 4,
      minValue: 2,
      maxValue: 8,
      textValue: 'step 4 of 8',
    };
    const progressIndicator = render(<ProgressIndicator {...values} />);

    expect(
      progressIndicator.getByRole('progressbar').getAttribute('aria-valuenow')
    ).toBe(String(values.value));
    expect(
      progressIndicator.getByRole('progressbar').getAttribute('aria-valuetext')
    ).toBe(values.textValue);
    expect(
      progressIndicator.getByRole('progressbar').getAttribute('aria-valuemin')
    ).toBe(String(values.minValue));
    expect(
      progressIndicator.getByRole('progressbar').getAttribute('aria-valuemax')
    ).toBe(String(values.maxValue));
  });
});

describe('<ProgressIndicator/> accessibility', () => {
  it('should have no a11y violations when aria-label is provided', async () => {
    const name = 'registration form';

    await testA11y(<ProgressIndicator value={4} aria-label={name} />);
  });

  it('should have no a11y violations when values are provided', async () => {
    const values = {
      value: 4,
      minValue: 2,
      maxValue: 8,
    };

    await testA11y(<ProgressIndicator {...values} aria-label="name" />);
  });
});
