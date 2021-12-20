import * as React from 'react';
import {render} from '@testing-library/react';
import FileHandler from './FileHandler';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('FileHandler', () => {
  it('fires onClick on click, space and enter', () => {
    const handleOnClick = jest.fn();
    const fileName = 'file name';
    const fileHandler = render(
      <FileHandler onClick={handleOnClick}>{fileName}</FileHandler>
    );

    userEvent.click(fileHandler.getByText(fileName));
    fileHandler.getByText(fileName).focus();
    userEvent.keyboard('{space}');
    userEvent.keyboard('{enter}');

    expect(handleOnClick).toHaveBeenCalledTimes(3);
  });

  it('passes src to link href and does not act on space', () => {
    const src = '#src';
    const fileName = 'file name';
    const fileHandler = render(<FileHandler src={src}>{fileName}</FileHandler>);

    fileHandler.getByText(fileName).focus();
    userEvent.keyboard('{space}');

    expect(fileHandler.getByRole('link').href).toContain(src);
    expect(window.location.href).not.toContain(src);
  });

  it('should have status in accessibility tree', () => {
    const fileHandler = render(<FileHandler loading />);

    expect(fileHandler.getByText('loading')).toBeTruthy();
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
});
