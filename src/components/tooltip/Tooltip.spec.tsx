import * as React from 'react';
import {
  screen,
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from './Tooltip';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

export function RenderTooltip(props: {
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Tooltip defaultOpen={props.defaultOpen}>
      <Tooltip.Element label="Copy to clipboard" />
      <Tooltip.Trigger>{props.children}</Tooltip.Trigger>
    </Tooltip>
  );
}

describe('<Tooltip />', () => {
  it('does not display tooltip by default', () => {
    render(
      <RenderTooltip>
        <Button
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );

    expect(screen.queryByText('Copy to clipboard')).not.toBeInTheDocument();
  });

  it('displays tooltip when trigger is hovered', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );

    const button = screen.getByTestId('button1');

    expect(button).toBeInTheDocument();

    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();
  });

  it('hides tooltip when trigger is no longer hovered', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );

    const button = screen.getByTestId('button1');

    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    userEvent.unhover(button);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('displays tooltip when trigger is focused', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();
  });

  it('hides tooltip when trigger loses focus', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    fireEvent.blur(button);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('hides tooltip if hover leaves, even when trigger is focused', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    userEvent.unhover(button);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('hides tooltip if focus leaves, even when trigger is hovered', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    fireEvent.blur(button);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('hides tooltip when Esc key is hit, when tooltip is triggered by focus', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    // @ts-expect-error TS2345
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('hides tooltip when Esc key is hit, when tooltip is triggered by hover', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );
    const button = screen.getByTestId('button1');

    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    // @ts-expect-error TS2345
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('hides tooltip when Esc key is hit, when tooltip is both focused and hovered', async () => {
    render(
      <RenderTooltip>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );
    const button = screen.getByTestId('button1');

    fireEvent.focus(button);
    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    // @ts-expect-error TS2345
    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('displays tooltip initially when set as default open', async () => {
    render(
      <RenderTooltip defaultOpen>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );

    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();
  });

  it('can hide default open tooltip by clicking somewhere in the document', async () => {
    render(
      <RenderTooltip defaultOpen>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );

    userEvent.click(document.body);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );
  });

  it('tooltip shows up and hides properly when set as default open', async () => {
    render(
      <RenderTooltip defaultOpen>
        <Button
          data-testid="button1"
          icon={<Icon color="adaptive" type="clipboard" />}
          iconOnly
          variant="solid-light"
        >
          button
        </Button>
      </RenderTooltip>
    );

    const button = screen.getByTestId('button1');

    expect(button).toBeInTheDocument();
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();

    userEvent.unhover(button);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Copy to clipboard')
    );

    userEvent.hover(button);
    expect(await screen.findByText('Copy to clipboard')).toBeInTheDocument();
  });
});
