import * as React from 'react';
import Checkbox from './Checkbox';

import {render} from '@testing-library/react';

describe('<Checkbox />', () => {
  const renderCheckbox = props =>
    render(<Checkbox onChange={() => {}} label="mycheckbox" {...props} />);

  it('it renders unchecked checkbox input', () => {
    const checkbox = renderCheckbox({});
    const checkboxState = checkbox.getByRole('checkbox');

    expect(checkboxState.checked).toBe(false);
  });
});
