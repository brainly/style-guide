import * as React from 'react';
import {render, within} from '@testing-library/react';
import FileHandler from './FileHandler';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('FileHandler', () => {
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
    const src = '#src';
    const fileName = 'file name';
    const fileHandler = render(
      <FileHandler src={src} thumbnailSrc={src}>
        {fileName}
      </FileHandler>
    );
    expect(fileHandler.getByRole('link').href).toContain(src);
    expect(fileHandler.queryByRole('img')).toBeFalsy();
  });
  it('should have a noticeable status in accessibility tree', () => {
    const fileHandler = render(<FileHandler loading />);
    const status = fileHandler.getByRole('status');
    expect(status.getAttribute('aria-live')).toBeTruthy();
    expect(within(status).getByText('uploading')).toBeTruthy();
  });
});
describe('FileHandler a11y', () => {
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
