import * as React from 'react';
import FileHandler from './FileHandler';
import {render, within} from '@testing-library/react';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

const mockCallback = jest.fn();

describe('FileHandler', () => {
  it('renders with icon', () => {
    const fileHandler = render(<FileHandler>example text</FileHandler>);

    expect(fileHandler.queryByText('example text')).toBeTruthy();
    expect(fileHandler.getByRole('img')).toBeTruthy();
  });

  it('renders close button when onClose', () => {
    const fileHandler = render(
      <FileHandler onClose={mockCallback}>example text</FileHandler>
    );

    expect(fileHandler.getByRole('button', {name: 'Close'})).toBeTruthy();
  });

  it('renders proper icon when iconType', () => {
    const fileHandler = render(
      <FileHandler iconType="heart">example text</FileHandler>
    );

    expect(fileHandler.getByRole('img', {name: /heart/})).toBeTruthy();
  });

  it('renders img when thumbnailSrc', () => {
    const fileHandler = render(
      <FileHandler thumbnailSrc="http://brainly.com/thumbnail">
        example text
      </FileHandler>
    );

    expect(fileHandler.queryByRole('img', {name: /attachment/})).toBeFalsy();
    const thumbnail = fileHandler.getByRole('img');

    expect(thumbnail.getAttribute('src')).toEqual(
      'http://brainly.com/thumbnail'
    );
  });

  it('renders Link when src', () => {
    const fileHandler = render(
      <FileHandler src="src">example text</FileHandler>
    );

    expect(fileHandler.getByRole('link')).toBeTruthy();
  });

  it('renders Spinner when loading', () => {
    const fileHandler = render(<FileHandler loading>example text</FileHandler>);

    expect(fileHandler.getByRole('status')).toBeTruthy();
    expect(fileHandler.queryByRole('img')).toBeFalsy();
  });

  it('has onClick, so it acts like a button: fires onClick on click, space and enter', () => {
    const handleOnClick = jest.fn();
    const fileName = 'file name';
    const fileHandler = render(
      <FileHandler onClick={handleOnClick}>{fileName}</FileHandler>
    );

    userEvent.click(
      fileHandler.getByRole('button', {
        name: fileName,
      })
    );
    expect(handleOnClick).toHaveBeenCalledTimes(1);
    fileHandler.getByText(fileName).focus();
    userEvent.keyboard('{space}');
    expect(handleOnClick).toHaveBeenCalledTimes(2);
    userEvent.keyboard('{enter}');
    expect(handleOnClick).toHaveBeenCalledTimes(3);
    expect(fileHandler.getByRole('button')).toBeTruthy();
  });

  it('has src, so it acts like a link: passes src to link href', () => {
    const src = 'http://styleguide.com/';
    const fileName = 'file name';
    const fileHandler = render(
      <FileHandler src={src} thumbnailSrc={src}>
        {fileName}
      </FileHandler>
    );

    expect(fileHandler.getByRole('link')).toHaveProperty('href', src);
    expect(fileHandler.queryByRole('img')).toBeFalsy();
  });

  it('should have a noticeable status in accessibility tree', () => {
    const fileHandler = render(<FileHandler loading />);
    const status = fileHandler.getByRole('status');

    expect(status.getAttribute('aria-live')).toBeTruthy();
    expect(within(status).getByText('uploading')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<FileHandler />);
    });

    it('should have no a11y violations when loading', async () => {
      await testA11y(<FileHandler loading>loading</FileHandler>);
    });

    it('should have no a11y violations when thumbanailSrc and src are provided', async () => {
      await testA11y(
        <FileHandler thumbnailSrc="#" src="#">
          fileName.jpg
        </FileHandler>
      );
    });

    it('should have no a11y violations when onClick is provided', async () => {
      const handleOnClick = jest.fn();

      await testA11y(
        <FileHandler onClick={handleOnClick}>file name</FileHandler>
      );
    });

    it('should have no a11y violations when onClose is provided', async () => {
      const handleOnClose = jest.fn();

      await testA11y(
        <FileHandler onClose={handleOnClose}>file name</FileHandler>
      );
    });
  });
});
