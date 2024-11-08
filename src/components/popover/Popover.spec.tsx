import * as React from 'react';
import {
  screen,
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popover from './Popover';
import Text from '../text/Text';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Icon from '../icons/Icon';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const POPOVER_TEXT = 'Get your badge on!';

export function RenderPopover(props: {
  defaultOpen?: boolean;
  useHover?: boolean;
  useClick?: boolean;
}) {
  return (
    <Popover {...props}>
      <Popover.Element padding="24px">
        <Flex direction="column" style={{gap: '10px'}}>
          <Text weight="bold" align="to-left">
            {POPOVER_TEXT}
          </Text>
          <Text align="to-left">
            Now you can show off your brain power with flashy badges. Complete
            achievements to claim new badges.
          </Text>
          <Button variant="solid">CHECK IT OUT</Button>
        </Flex>
      </Popover.Element>
      <Popover.Trigger>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="options" aria-hidden />}
          iconOnly
          variant="solid-light"
        />
      </Popover.Trigger>
    </Popover>
  );
}
describe('<Popover />', () => {
  it('does not display popover by default', () => {
    render(<RenderPopover />);
    expect(screen.queryByText(POPOVER_TEXT)).not.toBeInTheDocument();
  });

  it('displays popover when trigger is hovered', async () => {
    render(<RenderPopover />);

    const button = screen.getByTestId('button1');

    expect(button).toBeInTheDocument();

    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();
  });

  it('does not display popover when opening with hover is disabled and trigger is hovered', async () => {
    render(<RenderPopover useHover={false} />);
    const button = screen.getByTestId('button1');

    userEvent.hover(button);
    expect(screen.queryByText(POPOVER_TEXT)).not.toBeInTheDocument();
  });

  it('does not keep popover open when click opening is disabled and trigger is clicked, then unhovered', async () => {
    render(<RenderPopover useClick={false} />);
    const button = screen.getByTestId('button1');

    userEvent.hover(button);
    userEvent.click(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    userEvent.unhover(button);
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('hides popover when trigger is no longer hovered', async () => {
    render(<RenderPopover />);

    const button = screen.getByTestId('button1');

    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    userEvent.unhover(button);
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('does not hide popover when hover leaves if trigger was clicked', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    userEvent.hover(button);
    fireEvent.click(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    userEvent.unhover(button);
    expect(screen.getByText(POPOVER_TEXT)).toBeInTheDocument();
  });

  it('displays popover when trigger is focused', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();
  });

  it('hides popover when trigger loses focus', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    fireEvent.blur(button);
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('hides popover if hover leaves, even when trigger is focused', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    userEvent.unhover(button);
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('hides popover if focus leaves, even when trigger is hovered', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    fireEvent.blur(button);
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('hides popover when Esc key is hit, when popover is triggered by focus', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    // @ts-ignore TS2345
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('hides popover when Esc key is hit, when popover is triggered by hover', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    // @ts-ignore TS2345
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('hides popover when Esc key is hit, when popover is both focused and hovered', async () => {
    render(<RenderPopover />);
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    // @ts-ignore TS2345
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('displays popover initially when set as default open', async () => {
    render(<RenderPopover defaultOpen />);

    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();
  });

  it('can hide default open popover by clicking somewhere in the document', async () => {
    render(<RenderPopover defaultOpen />);

    userEvent.click(document.body);
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));
  });

  it('popover shows up and hides properly when set as default open', async () => {
    render(<RenderPopover defaultOpen />);

    const button = screen.getByTestId('button1');

    expect(button).toBeInTheDocument();
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();

    userEvent.unhover(button);
    await waitForElementToBeRemoved(() => screen.queryByText(POPOVER_TEXT));

    userEvent.hover(button);
    expect(await screen.findByText(POPOVER_TEXT)).toBeInTheDocument();
  });
});
