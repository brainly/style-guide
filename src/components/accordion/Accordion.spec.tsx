import * as React from 'react';
// import {mount} from 'enzyme';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import Link from '../text/Link';
import Box from '../box/Box';
import {render, fireEvent} from '@testing-library/react';

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

  it('displays no gaps between elements when spacing is set to "none"', () => {
    const accordion = render(
      <Accordion spacing="none">
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(
      (
        accordion.getAllByRole('heading')[0].parentNode as HTMLHeadingElement
      ).classList.contains('sg-accordion-item--no-gap')
    ).toBeTruthy();
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
});
