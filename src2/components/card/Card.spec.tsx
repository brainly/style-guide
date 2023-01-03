import * as React from "react";
import Card, { CARD_PADDING } from "./Card";
import CardHole from "./CardHole";
import { shallow } from "enzyme";
describe("Card", () => {
  test("render", () => {
    const card = shallow(
      <Card>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    expect(card.hasClass("sg-card")).toEqual(true);
  });
  test("full", () => {
    const card = shallow(
      <Card full>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    expect(card.hasClass("sg-card--full")).toEqual(true);
  });
  test("vertical", () => {
    const card = shallow(
      <Card vertical>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    expect(card.hasClass("sg-card--vertical")).toEqual(true);
  });
  test("centered", () => {
    const card = shallow(
      <Card centered>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    expect(card.hasClass("sg-card--centered")).toEqual(true);
  });
  test("small padding", () => {
    const padding = CARD_PADDING.SMALL;
    const card = shallow(
      <Card padding={padding}>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    expect(card.hasClass("sg-card--padding-small")).toEqual(true);
  });
  test("large padding", () => {
    const padding = CARD_PADDING.LARGE;
    const card = shallow(
      <Card padding={padding}>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    expect(card.hasClass("sg-card--padding-large")).toEqual(true);
  });
});