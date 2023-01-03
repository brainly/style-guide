import * as React from "react";
import CardHole from "./CardHole";
import { shallow } from "enzyme";
describe("<CardHole />", () => {
  test("render", () => {
    const cardHole = shallow(<CardHole>some text</CardHole>);
    expect(cardHole.hasClass("sg-card__hole")).toEqual(true);
  });
  test("colors", () => {
    const color = "gray-50";
    const cardHole = shallow(<CardHole color={color}>some text</CardHole>);
    expect(cardHole.hasClass(`sg-card__hole--${color}`)).toEqual(true);
  });
});