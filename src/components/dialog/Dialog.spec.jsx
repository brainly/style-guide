import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Dialog from './Dialog';

describe('<Dialog />', () => {
  it('renders correctly', async () => {
    render(<Dialog isOpen>I am dialog</Dialog>);
    expect(screen.getByText('I am dialog')).toBeTruthy();
  });

  it('triggers close event when close button is clicked', async () => {
    const handleClick = jest.fn();

    render(
      <Dialog isOpen onClose={handleClick}>
        I am dialog
      </Dialog>
    );
    fireEvent.click(screen.getByText(/close/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('triggers close button when escape key is pressed', async () => {
    const handleClick = jest.fn();

    render(
      <Dialog isOpen onClose={handleClick}>
        I am dialog
      </Dialog>
    );
    fireEvent.keyDown(screen.getByText('I am dialog'), {key: 'Escape'});
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
