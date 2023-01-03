import * as React from "react";
import { mount } from "enzyme";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import Link from "../text/Link";
import Box from "../box/Box";
describe("<Accordion>", () => {
  it("renders with items", () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    expect(
      accordion
        .find(AccordionItem)
        .containsMatchingElement("Accordion Item Description")
    ).toBe(true);
  });
  it("has collapsed items by default", () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    expect(
      accordion
        .find({
          role: "button",
        })
        .hostNodes()
        .prop("aria-expanded")
    ).toBe(false);
    expect(
      accordion
        .find({
          role: "region",
        })
        .prop("hidden")
    ).toBe(true);
  });
  it("expands items after click", () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    const accordionItemButton = accordion
      .find({
        role: "button",
      })
      .hostNodes();
    accordionItemButton.simulate("focus");
    accordionItemButton.simulate("click");
    expect(
      accordion
        .find({
          role: "button",
        })
        .hostNodes()
        .prop("aria-expanded")
    ).toBe(true);
    expect(accordion.find(".sg-accordion-item__content--hidden")).toHaveLength(
      0
    );
  });
  it('expands one item at a time when "allowMultiple" is set to false', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    accordion
      .find({
        title: "Item 1",
      })
      .find({
        role: "button",
      })
      .hostNodes()
      .simulate("click");
    accordion
      .find({
        title: "Item 2",
      })
      .find({
        role: "button",
      })
      .hostNodes()
      .simulate("click");
    accordion
      .find({
        title: "Item 3",
      })
      .find({
        role: "button",
      })
      .hostNodes()
      .simulate("click");
    // hostNodes returns html elements and skip react components
    expect(accordion.find("[aria-expanded=true]").hostNodes()).toHaveLength(1);
  });
  it('allows expanding multiple items when "allowMultiple" is set to true', () => {
    const accordion = mount(
      <Accordion allowMultiple>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    accordion
      .find({
        title: "Item 1",
      })
      .find({
        role: "button",
      })
      .hostNodes()
      .simulate("click");
    accordion
      .find({
        title: "Item 2",
      })
      .find({
        role: "button",
      })
      .hostNodes()
      .simulate("click");
    accordion
      .find({
        title: "Item 3",
      })
      .find({
        role: "button",
      })
      .hostNodes()
      .simulate("click");
    // hostNodes returns html elements and skip react components
    expect(accordion.find("[aria-expanded=true]").hostNodes()).toHaveLength(3);
  });
  it('displays no gaps between elements when spacing is set to "none"', () => {
    const accordion = mount(
      <Accordion spacing="none">
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    expect(
      accordion.find(Box).at(0).hasClass("sg-accordion-item--no-gap")
    ).toBe(true);
  });
  it('does not change border on hover when spacing is set to "none"', () => {
    const accordion = mount(
      <Accordion spacing="none">
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    accordion
      .find({
        title: "Item 1",
      })
      .simulate("mouseenter");
    expect(accordion.find(Box).at(0).prop("borderColor")).toEqual("gray-20");
  });
  it('by default expands items that have "defaultExpanded" prop', () => {
    const accordion = mount(
      <Accordion allowMultiple defaultExpanded={["id-1", "id-2"]}>
        <AccordionItem title="Item 1" id="id-1">
          Accordion Item Description
        </AccordionItem>
        <AccordionItem title="Item 2" id="id-2">
          Accordion Item Description
        </AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    // hostNodes returns html elements and skip react components
    expect(accordion.find("[aria-expanded=true]").hostNodes()).toHaveLength(2);
  });
  it("expands controlled items when expanded is type of array", () => {
    const accordionIds = ["id-1", "id-2", "id-3"];
    const accordion = mount(
      <Accordion expanded={accordionIds} onChange={() => undefined}>
        {accordionIds.map((id) => (
          <AccordionItem title={id} id={id} key={id}>
            Accordion Item Description
          </AccordionItem>
        ))}
      </Accordion>
    );
    expect(
      accordion.find('[role="region"][aria-labelledby]').hostNodes()
    ).toHaveLength(accordionIds.length);
    expect(accordion.find("[aria-expanded=true]").hostNodes()).toHaveLength(3);
  });
  it("expands controlled item when expanded is type of string", () => {
    const accordionIds = ["id-1", "id-2", "id-3"];
    const accordion = mount(
      <Accordion expanded={accordionIds[0]} onChange={(noop) => noop}>
        {accordionIds.map((id) => (
          <AccordionItem title={id} id={id} key={id}>
            Accordion Item Description
          </AccordionItem>
        ))}
      </Accordion>
    );
    expect(
      accordion.find('[role="region"][aria-labelledby]').hostNodes()
    ).toHaveLength(accordionIds.length);
    expect(accordion.find("[aria-expanded=true]").hostNodes()).toHaveLength(1);
  });
  it("calls callback when cliking on item", () => {
    const accordionIds = ["id-1", "id-2", "id-3"];
    const handleOnChange = jest.fn();
    const accordion = mount(
      <Accordion expanded={accordionIds[0]} onChange={handleOnChange}>
        {accordionIds.map((id) => (
          <AccordionItem title={id} id={id} key={id}>
            Accordion Item Description
          </AccordionItem>
        ))}
      </Accordion>
    );
    const item = accordionIds[0];
    accordion
      .find({
        title: item,
      })
      .find({
        role: "button",
      })
      .hostNodes()
      .simulate("click");
    expect(handleOnChange).toHaveBeenCalled();
    expect(handleOnChange).toHaveBeenCalledWith(item);
  });
  it("renders Link when title is string", () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );
    expect(accordion.find(Link).exists()).toBe(true);
  });
  it("does not render Link when title is not string", () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title={<div>info</div>}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );
    expect(accordion.find(Link).exists()).toBe(false);
  });
});