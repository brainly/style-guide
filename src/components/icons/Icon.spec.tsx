import * as React from 'react';
import Icon, {TYPE, ICON_COLOR} from './Icon';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Icon', () => {
  it('render if type', () => {
    const icon = render(<Icon type={TYPE.ANSWER} />);

    expect(
      icon.container.firstElementChild.classList.contains('sg-icon')
    ).toEqual(true);
  });

  it('render if children', () => {
    const icon = render(
      <Icon>
        <div>
          <svg
            data-testid="foo-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          />
        </div>
      </Icon>
    );

    expect(
      icon.container.firstElementChild.classList.contains('sg-icon')
    ).toEqual(true);
    expect(icon.queryByTestId('foo-icon')).toBeTruthy();
  });

  it('type passed to xlink:href', () => {
    const type = TYPE.ANSWER;
    const icon = render(<Icon type={type} />);
    const use = icon.baseElement.querySelector('use');

    expect(use.getAttribute('xlink:href')).toEqual(`#icon-${type}`);
  });

  it('colors', () => {
    const type = TYPE.ANSWER;
    const color = ICON_COLOR['icon-black'];
    const icon = render(<Icon type={type} color={color} />);

    expect(
      icon.container.firstElementChild.classList.contains(`sg-icon--${color}`)
    ).toEqual(true);
  });

  it('size', () => {
    const size = 16;
    const type = TYPE.ANSWER;
    const icon = render(<Icon type={type} size={size} />);

    expect(
      icon.container.firstElementChild.classList.contains(`sg-icon--x${size}`)
    ).toEqual(true);
  });

  it('tag type', () => {
    const component = render(
      <Icon type={TYPE.ANSWER} size={16} tagType="span" />
    );

    expect(component.container.firstElementChild.tagName).toEqual('SPAN');
  });

  it('other props', () => {
    const type = TYPE.ANSWER;
    const icon = render(<Icon type={type} data-testid="foo" />);

    expect(icon.queryByTestId('foo')).toBeTruthy();
  });

  it('should have an accessible title and img role', async () => {
    const type = 'search';
    const icon = render(<Icon type={type} />);

    expect(
      icon.getByRole('img', {
        name: type,
      })
    ).toBeTruthy();
  });

  it('should have an accessible description', async () => {
    const type = 'search';
    const description = 'desc desc desc';
    const icon = render(<Icon type={type} description={description} />);

    expect(icon.getByText(description)).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Icon type="search" />);
    });

    it('should have no a11y violations when title is provided', async () => {
      await testA11y(<Icon type="search" title="Title" />);
    });

    it('should have no a11y violations when description is provided', async () => {
      await testA11y(<Icon type="search" description="description" />);
    });
  });
});
