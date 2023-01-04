import * as React from 'react';
import {render, screen} from '@testing-library/react';
import Avatar from './Avatar';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';
describe('Avatar', () => {
  it('renders avatar removed from a11y tree when imgSrc and link are not provided', () => {
    const alt = 'alt';
    const avatar = render(<Avatar alt={alt} />);
    expect(avatar.queryByRole('img')).toBeFalsy();
    expect(avatar.queryByAltText(alt)).toBeFalsy();
  });
  it('renders avatar only as an accessible link when imgSrc is not provided', () => {
    const label = 'link label';
    const avatar = render(<Avatar link="#" ariaLinkLabel={label} />);
    expect(
      avatar.getByRole('link', {
        name: label,
      })
    ).toBeTruthy();
    expect(avatar.queryByRole('img')).toBeFalsy();
  });
  it('renders avatar with an accessible image', () => {
    const imgAlt = 'image alt';
    const avatar = render(<Avatar imgSrc="#" alt={imgAlt} />);
    expect(avatar.getByRole('img')).toBeTruthy();
    expect(screen.getByAltText(imgAlt)).toBeTruthy();
  });
  it('renders avatar with an accessible link and an accessible image', () => {
    const imgAlt = 'image alt';
    const label = 'link label';
    const avatar = render(
      <Avatar imgSrc="#" alt={imgAlt} link="#" ariaLinkLabel={label} />
    );
    expect(avatar.getByRole('img')).toBeTruthy();
    expect(screen.getByAltText(imgAlt)).toBeTruthy();
    expect(
      avatar.getByRole('link', {
        name: label,
      })
    ).toBeTruthy();
  });
  it('is focusable if link is provided', () => {
    const label = 'link label';
    const avatar = render(<Avatar link="#" imgSrc="#" ariaLinkLabel={label} />);
    userEvent.click(avatar.getByLabelText(label));
    expect(avatar.getByRole('link')).toEqual(document.activeElement);
  });
  it('is not focusable if link is not provided', () => {
    const label = 'link label';
    const avatar = render(<Avatar imgSrc="#" alt={label} />);
    userEvent.click(avatar.getByAltText(label));
    expect(document.body).toEqual(document.activeElement);
  });
});
describe('Avatar a11y', () => {
  it('should have no a11y violations when imgSrc and link are not provided', async () => {
    await testA11y(<Avatar />);
  });
  it('should have no a11y violations when only link and label are provided', async () => {
    await testA11y(<Avatar link="#" ariaLinkLabel="label" />);
  });
  it('should have no a11y violations when imgSrc and alt are provided', async () => {
    await testA11y(<Avatar imgSrc="#" alt="alt" />);
  });
  it('should have no a11y violations when link, label, imgSrc and alt are provided', async () => {
    await testA11y(
      <Avatar imgSrc="#" alt="alt" link="#" ariaLinkLabel="label" />
    );
  });
});