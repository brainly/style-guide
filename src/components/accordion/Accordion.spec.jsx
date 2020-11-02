import React from 'react';
import {mount} from 'enzyme';
import {act} from 'react-dom/test-utils';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

describe('<Accordion>', () => {
  it('renders', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(
      accordion
        .find(AccordionItem)
        .containsMatchingElement('Accordion Item Description')
    ).toBe(true);
  });

  it('has collapsed items by default', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(
      accordion
        .find(AccordionItem)
        .getDOMNode()
        .getAttribute('aria-expanded')
    ).toBe('false');
  });

  it('expands items after click', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    const accordionItem = accordion.find(AccordionItem);

    accordionItem.simulate('click');

    expect(accordionItem.getDOMNode().getAttribute('aria-expanded')).toBe(
      'true'
    );

    expect(accordion.find('.sg-accordion-item__content--hidden')).toHaveLength(
      0
    );
  });
});
