import * as React from 'react';
import Label from './Label';
import {fireEvent, render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Label', () => {
  it('render', () => {
    const label = render(
      <Label type="default" color="blue">
        example label
      </Label>
    );

    expect(
      label.container.firstElementChild.classList.contains('sg-label')
    ).toBe(true);
    expect(
      label.container.firstElementChild.classList.contains('sg-label--blue-20')
    ).toBe(true);
  });

  it('render with icon', () => {
    const label = render(
      <Label type="default" iconType="star">
        example label
      </Label>
    );

    expect(label.getByRole('img')).toBeTruthy();
  });

  it('render type solid', () => {
    const label = render(
      <Label type="solid" color="green">
        example label
      </Label>
    );

    expect(
      label.container.firstElementChild.classList.contains('sg-label--green-60')
    ).toBe(true);
  });

  it('when onClose is defined, has close button', () => {
    const mockCallback = jest.fn();
    const label = render(
      <Label type="default" color="green" onClose={mockCallback}>
        example label
      </Label>
    );

    expect(label.getByRole('button', {name: 'close'})).toBeTruthy();
  });

  it('clicking on close button calls onClose', () => {
    const mockCallback = jest.fn();
    const label = render(
      <Label type="solid" color="green" onClose={mockCallback}>
        example label
      </Label>
    );
    const closeButton = label.getByRole('button', {name: 'close'});

    fireEvent.click(closeButton);
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should have an accessible name provided by aria-label', async () => {
    const name = 'accessible name';
    const label = render(<Label aria-label={name}>label</Label>);

    expect(label.getByLabelText(name)).toBeTruthy();
  });

  it('should have an accessible name for the close button', async () => {
    const buttonName = 'remove attachment';
    const handleOnClose = jest.fn();
    const label = render(
      <Label onClose={handleOnClose} closeButtonLabel={buttonName}>
        dog.jpg
      </Label>
    );

    expect(
      label.getByRole('button', {
        name: buttonName,
      })
    ).toBeTruthy();
  });

  it('should have an accessible name for an icon', async () => {
    const iconTitle = 'your attachment';
    const label = render(
      <Label iconType="attachment" iconTitle={iconTitle}>
        dog.jpg
      </Label>
    );

    expect(
      label.getByRole('img', {
        name: iconTitle,
      })
    ).toBeTruthy();
  });

  it('should have an icon which is hidden from accessibility tree', async () => {
    const label = render(
      <Label iconType="attachment" iconAriaHidden>
        dog.jpg
      </Label>
    );

    expect(label.queryByRole('img')).toBeFalsy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Label>label</Label>);
    });

    it('should have no a11y violations when a named icon is provided', async () => {
      await testA11y(
        <Label iconType="attachment" iconTitle="your attachment">
          dog.jpg
        </Label>
      );
    });

    it('should have no a11y violations when icon is hidden from accessibility tree', async () => {
      await testA11y(
        <Label iconType="attachment" iconAriaHidden>
          label
        </Label>
      );
    });

    it('should have no a11y violations when onClose is provided', async () => {
      const handleOnClose = jest.fn();

      await testA11y(<Label onClose={handleOnClose}>dog.jpg</Label>);
    });
  });
});
