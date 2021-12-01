import * as React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import {testA11y} from '../../axe';

const key = {
  enter: {
    key: 'Enter',
    code: 'Enter',
    keyCode: 13,
    charCode: 13,
  },
  space: {
    key: 'Space',
    code: 'Space',
    keyCode: 32,
    charCode: 32,
  },
  tab: {
    key: 'Tab',
    code: 'Tab',
    keyCode: 9,
    charCode: 9,
  },
};

describe('Accordion a11y', () => {
  it('renders accordion with expanded and collapsed items', async () => {
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

  it('renders with named items', () => {
    const title = 'Item_1';
    const accordion = render(
      <Accordion defaultExpanded={[title]}>
        <AccordionItem title={title} id={title}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );

    const heading = accordion.getByRole('heading');

    expect(heading.getAttribute('aria-level')).toBeTruthy();
    expect(heading.textContent).toBe(title);

    expect(accordion.getByRole('region', {name: title})).toBeTruthy();
    expect(accordion.getByRole('button').getAttribute('aria-controls')).toEqual(
      accordion.getByRole('region').getAttribute('id')
    );
  });

  it('expands and collapses item on Enter/Space keydown', async () => {
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
    expect(accordion.queryByRole('region')).toBeFalsy();

    item.focus();
    fireEvent.keyDown(accordion.getByText(accordionId), key.enter);

    expect(item.getAttribute('aria-expanded')).toEqual('true');
    expect(accordion.getByRole('region')).toBeTruthy();

    fireEvent.keyDown(accordion.getByText(accordionId), key.space);

    expect(item.getAttribute('aria-expanded')).toEqual('false');
    waitForElementToBeRemoved(accordion.queryByRole('region'));
  });
});
