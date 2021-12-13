import * as React from 'react';
import {render, screen} from '@testing-library/react';
import Avatar from './Avatar';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('Avatar a11y', () => {
  describe('imgSrc and link is not provided', () => {
    it('renders avatar removed from a11y tree', async () => {
      const alt = 'alt';
      const avatar = render(<Avatar alt={alt} />);

      expect(avatar.queryByRole('img')).toBeFalsy();
      expect(avatar.queryByAltText(alt)).toBeFalsy();
    });

    it('should have no a11y violations', async () => {
      await testA11y(<Avatar />);
    });
  });

  it('renders empty avatar with link and label', async () => {
    const label = 'link label';
    const avatar = render(<Avatar link="#" linkLabel={label} />);

    await testA11y(avatar.container);
    expect(avatar.getByRole('link', {name: label})).toBeTruthy();
    expect(avatar.queryByRole('img')).toBeFalsy();
  });

  it('renders avatar with image that has alt text', async () => {
    const imgAlt = 'image alt';
    const avatar = render(<Avatar imgSrc="#" alt={imgAlt} />);

    await testA11y(avatar.container);
    expect(avatar.getByRole('img')).toBeTruthy();
    expect(screen.getByAltText(imgAlt)).toBeTruthy();
  });

  it('renders avatar with link and image that has alt text', async () => {
    const imgAlt = 'image alt';
    const label = 'link label';
    const avatar = render(
      <Avatar imgSrc="#" alt={imgAlt} link="#" linkLabel={label} />
    );

    await testA11y(avatar.container);
    expect(avatar.getByRole('img')).toBeTruthy();
    expect(screen.getByAltText(imgAlt)).toBeTruthy();
    expect(avatar.getByRole('link', {name: label})).toBeTruthy();
  });

  it('is focusable if link is provided', async () => {
    const label = 'link label';
    const avatar = render(<Avatar link="#" imgSrc="#" linkLabel={label} />);

    userEvent.click(avatar.getByLabelText(label));

    expect(avatar.getByRole('link')).toEqual(document.activeElement);
  });

  it('is not focusable if link is not provided', async () => {
    const label = 'link label';
    const avatar = render(<Avatar imgSrc="#" alt={label} />);

    userEvent.click(avatar.getByAltText(label));

    expect(document.body).toEqual(document.activeElement);
  });
});
