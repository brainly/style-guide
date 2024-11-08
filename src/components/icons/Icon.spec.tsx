import * as React from 'react';
import Icon, {TYPE} from './Icon';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Icon', () => {
  it('render if type', () => {
    const icon = render(<Icon type={TYPE.ANSWER} />);

    expect(icon.getByRole('img')).toBeTruthy();
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

    expect(icon.getByTestId('foo-icon')).toBeTruthy();
  });

  it('tag type', () => {
    const component = render(<Icon type={TYPE.ANSWER} size={16} as="span" />);

    // @ts-ignore TS18047
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
