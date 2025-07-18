import * as React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('<Accordion>', () => {
  it('renders with items', () => {
    const accordion = render(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(accordion.getByText('Accordion Item Description')).toBeTruthy();
  });

  it('has collapsed items by default', () => {
    const accordion = render(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(
      accordion.getByRole('button', {
        expanded: false,
      })
    ).toBeTruthy();
    expect(accordion.getByRole('region', {hidden: true})).toBeTruthy();
  });

  it('expands items after click', () => {
    const accordion = render(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    const accordionItemButton = accordion.getByRole('button');

    fireEvent.focus(accordionItemButton);
    fireEvent.click(accordionItemButton);
    expect(
      accordion.getByRole('button', {
        expanded: true,
      })
    ).toBeTruthy();
    const accordionItemContent = accordion.getByRole('region');

    expect(accordionItemContent.getAttribute('hidden')).toBeFalsy();
  });

  it('expands one item at a time when "allowMultiple" is set to false', () => {
    const accordion = render(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    fireEvent.click(accordion.getByText('Item 1'));
    fireEvent.click(accordion.getByText('Item 2'));
    fireEvent.click(accordion.getByText('Item 3'));

    expect(accordion.getAllByRole('button', {expanded: true})).toHaveLength(1);
  });

  it('allows expanding multiple items when "allowMultiple" is set to true', () => {
    const accordion = render(
      <Accordion allowMultiple>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    fireEvent.click(accordion.getByText('Item 1'));
    fireEvent.click(accordion.getByText('Item 2'));
    fireEvent.click(accordion.getByText('Item 3'));

    expect(accordion.getAllByRole('button', {expanded: true})).toHaveLength(3);
  });

  it('does not change border on hover when spacing is set to "none"', () => {
    const accordion = render(
      <Accordion spacing="none">
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    fireEvent.mouseEnter(accordion.getByText('Item 1'));
    expect(
      (
        accordion.getAllByRole('heading')[0].parentNode as HTMLHeadingElement
      ).classList.contains('sg-box--border-color-gray-20')
    ).toBeTruthy();
  });

  it('by default expands items that have "defaultExpanded" prop', () => {
    const accordion = render(
      <Accordion allowMultiple defaultExpanded={['id-1', 'id-2']}>
        <AccordionItem title="Item 1" id="id-1">
          Accordion Item Description
        </AccordionItem>
        <AccordionItem title="Item 2" id="id-2">
          Accordion Item Description
        </AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(accordion.getAllByRole('button', {expanded: true})).toHaveLength(2);
  });

  it('expands controlled items when expanded is type of array', () => {
    const accordionIds = ['id-1', 'id-2', 'id-3'];
    const accordion = render(
      <Accordion expanded={accordionIds} onChange={() => undefined}>
        {accordionIds.map(id => (
          <AccordionItem title={id} id={id} key={id}>
            Accordion Item Description
          </AccordionItem>
        ))}
      </Accordion>
    );

    expect(accordion.getAllByRole('region')).toHaveLength(accordionIds.length);
    expect(accordion.getAllByRole('button', {expanded: true})).toHaveLength(
      accordionIds.length
    );
  });

  it('expands controlled item when expanded is type of string', () => {
    const accordionIds = ['id-1', 'id-2', 'id-3'];
    const accordion = render(
      <Accordion expanded={accordionIds[0]} onChange={noop => noop}>
        {accordionIds.map(id => (
          <AccordionItem title={id} id={id} key={id}>
            Accordion Item Description
          </AccordionItem>
        ))}
      </Accordion>
    );

    expect(accordion.getAllByRole('region')).toHaveLength(1);
    expect(accordion.getAllByRole('button', {expanded: true})).toHaveLength(1);
  });

  it('calls callback when cliking on item', () => {
    const accordionIds = ['id-1', 'id-2', 'id-3'];
    const handleOnChange = jest.fn();
    const accordion = render(
      <Accordion expanded={accordionIds[0]} onChange={handleOnChange}>
        {accordionIds.map(id => (
          <AccordionItem title={id} id={id} key={id}>
            Accordion Item Description
          </AccordionItem>
        ))}
      </Accordion>
    );
    const item = accordionIds[0];

    fireEvent.click(accordion.getAllByRole('button')[0]);
    expect(handleOnChange).toHaveBeenCalled();
    expect(handleOnChange).toHaveBeenCalledWith(item);
  });

  it('renders with named items', () => {
    const title = 'Item_1';
    const accordion = render(
      <Accordion defaultExpanded={[title]}>
        <AccordionItem title={title} id={title}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );
    const heading = accordion.getByRole('heading', {
      name: title,
    });

    expect(heading.getAttribute('aria-level')).toBeTruthy();
    expect(
      accordion.getByRole('region', {
        name: title,
      })
    ).toBeTruthy();
    expect(accordion.getByRole('button').getAttribute('aria-controls')).toEqual(
      accordion.getByRole('region').getAttribute('id')
    );
  });

  it('expands and collapses item on click', async () => {
    const accordionId = 'id-1';
    const accordion = render(
      <Accordion>
        <AccordionItem title={accordionId} id={accordionId}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );
    const item = accordion.getByRole('button');

    expect(item.getAttribute('aria-expanded')).toEqual('false');
    expect(accordion.queryByRole('region')).toBeNull();
    accordion.getByRole('button').click();
    await waitFor(() =>
      expect(item.getAttribute('aria-expanded')).toEqual('true')
    );
    await waitFor(() => expect(accordion.getByRole('region')).toBeTruthy());
    accordion.getByRole('button').click();
    await waitFor(() =>
      expect(item.getAttribute('aria-expanded')).toEqual('false')
    );
    fireEvent(accordion.getByRole('region'), new Event('transitionend'));
    await waitFor(() => expect(accordion.queryByRole('region')).toBeNull());
  });

  it('expands and collapses item on Enter/Space keydown when motion is reduced', async () => {
    const accordionId = 'id-1';

    render(
      <Accordion reduceMotion>
        <AccordionItem title={accordionId} id={accordionId} tabIndex={1}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );
    const item = screen.getByRole('button');

    expect(item.getAttribute('aria-expanded')).toEqual('false');
    expect(screen.queryByRole('region')).toBeNull();

    focusElement(item);

    fireEvent.keyDown(item, {key: 'Enter', keyCode: '13'});
    expect(item.getAttribute('aria-expanded')).toEqual('true');
    expect(screen.getByRole('region')).toBeTruthy();

    fireEvent.keyDown(item, {key: 'Space', keyCode: '32'});
    expect(item.getAttribute('aria-expanded')).toEqual('false');
    expect(screen.queryByRole('region')).toBeNull();
  });

  it('does not expand/collapse on keyboard when disableKeyboardExpansion is true', async () => {
    const accordionId = 'id-1';

    render(
      <Accordion disableKeyboardExpansion reduceMotion>
        <AccordionItem title={accordionId} id={accordionId} tabIndex={1}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );
    const item = screen.getByRole('button');

    expect(item.getAttribute('aria-expanded')).toEqual('false');
    expect(screen.queryByRole('region')).toBeNull();

    focusElement(item);

    // Try to expand with Enter - should not work
    fireEvent.keyDown(item, {key: 'Enter', keyCode: '13'});
    expect(item.getAttribute('aria-expanded')).toEqual('false');
    expect(screen.queryByRole('region')).toBeNull();

    // Try to expand with Space - should not work
    fireEvent.keyDown(item, {key: 'Space', keyCode: '32'});
    expect(item.getAttribute('aria-expanded')).toEqual('false');
    expect(screen.queryByRole('region')).toBeNull();

    // But clicking should still work
    fireEvent.click(item);
    expect(item.getAttribute('aria-expanded')).toEqual('true');
    expect(screen.getByRole('region')).toBeTruthy();
  });

  it('has an accessible name', () => {
    const label = 'Accordion name';
    const accordion = render(<Accordion aria-label={label} />);

    expect(accordion.getByLabelText(label)).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations when renders Accordion with expanded and collapsed items', async () => {
      const accordionIds = ['id-1', 'id-2'];

      await testA11y(
        <Accordion defaultExpanded={accordionIds[0]}>
          {accordionIds.map(id => (
            <AccordionItem title={id} id={id} key={id}>
              Accordion Item Description
            </AccordionItem>
          ))}
        </Accordion>
      );
    });
  });
});

const focusElement = (element: HTMLElement) => {
  // This does not set the document.activeElement to the item, so expect(item).toHaveFocus() fails
  fireEvent.focus(element);

  // Those do not trigger onFocus event in React 17, so focusedElementId is always null
  // userEvent.tab();
  // item.focus();

  // expect(item).toHaveFocus();
};
