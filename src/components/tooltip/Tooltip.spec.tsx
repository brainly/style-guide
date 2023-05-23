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

class ResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

describe('<Tooltip />', () => {
  window.ResizeObserver = ResizeObserver;

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

    expect(screen.queryByText('Copy to clipboard')).toBeInTheDocument();
  });

  it('displays tooltip when trigger is hovered', () => {
    const tooltip = render(
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
    fireEvent.mouseEnter(button);

    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();
  });

  it('hides tooltip when trigger is no longer hovered', () => {
    const tooltip = render(
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

    fireEvent.mouseEnter(button);
    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();

    fireEvent.mouseEnter(document);
    expect(tooltipElement).not.toBeInTheDocument();
  });

  it('displays tooltip when trigger is focused', () => {
    const tooltip = render(
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
    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();
  });

  it('hides tooltip when trigger loses focus', () => {
    const tooltip = render(
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
    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();

    fireEvent.blur(button);
    expect(tooltipElement).not.toBeInTheDocument();
  });

  it('hides tooltip if hover leaves, even when trigger is focused, ', () => {
    const tooltip = render(
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
    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();

    fireEvent.mouseEnter(button);

    expect(tooltipElement).toBeInTheDocument();

    fireEvent.mouseEnter(document);
    expect(tooltipElement).not.toBeInTheDocument();
  });

  it('hides tooltip if focus leaves, even when trigger is hovered, ', () => {
    const tooltip = render(
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
    fireEvent.mouseEnter(button);

    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();

    fireEvent.blur(button);
    expect(tooltipElement).not.toBeInTheDocument();
  });

  it('hides tooltip when Esc key is hit', () => {
    const tooltip = render(
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
    fireEvent.mouseEnter(button);

    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();

    fireEvent.keyDown(document.activeElement, {key: 'Escape'});
    expect(tooltipElement).not.toBeInTheDocument();
  });

  it('displays tooltip initally when set as default open', async () => {
    const tooltip = render(
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

    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(tooltipElement).toBeInTheDocument();
  });

  it('can hide default open tooltip by clicking somewhere in the document', async () => {
    const {queryByRole} = render(
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
    await waitForElementToBeRemoved(() => queryByRole('tooltip'));
  });

  it('tooltip shows up and hides properly when set as default open', async () => {
    const tooltip = render(
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
    const tooltipElement = tooltip.getByRole('tooltip') as HTMLElement;

    expect(button).toBeInTheDocument();
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.mouseEnter(button);
    expect(tooltipElement).toBeInTheDocument();

    fireEvent.mouseEnter(document.body);
    expect(tooltipElement).not.toBeInTheDocument();

    fireEvent.mouseEnter(button);
    expect(tooltipElement).toBeInTheDocument();
  });
});
