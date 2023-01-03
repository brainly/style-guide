import * as React from "react";
import Headline, {
  HEADLINE_SIZE,
  HEADLINE_TYPE,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from "./Headline";
import { shallow, mount } from "enzyme";
test("render", () => {
  const headline = shallow(<Headline>Test</Headline>);
  expect(headline.hasClass("sg-headline")).toBeTruthy();
});
test("size", () => {
  const headline = shallow(
    <Headline size={HEADLINE_SIZE.SMALL}>Test</Headline>
  );
  expect(headline.hasClass("sg-headline--small")).toBeTruthy();
});
it("size is responsive prop", () => {
  const component = shallow(
    <Headline
      size={[
        HEADLINE_SIZE.SMALL,
        HEADLINE_SIZE.XXLARGE,
        null,
        HEADLINE_SIZE.XXXLARGE,
      ]}
    >
      Test
    </Headline>
  );
  expect(
    component.hasClass(
      "sg-headline--small md:sg-headline--xxlarge xl:sg-headline--xxxlarge"
    )
  ).toEqual(true);
});
test("type", () => {
  const headline = mount(<Headline type={HEADLINE_TYPE.H3}>Test</Headline>);
  expect(headline.props().type).toEqual(HEADLINE_TYPE.H3);
});
test("text-white", () => {
  const text = shallow(<Headline color="text-white">Test</Headline>);
  expect(text.hasClass("sg-headline--text-white")).toBeTruthy();
});
test("transform uppercase", () => {
  const headline = shallow(
    <Headline transform={HEADLINE_TRANSFORM.UPPERCASE}>Test</Headline>
  );
  expect(headline.hasClass("sg-headline--uppercase")).toBeTruthy();
});
it("transform is responsive prop", () => {
  const component = shallow(
    <Headline
      transform={[
        HEADLINE_TRANSFORM.UPPERCASE,
        HEADLINE_TRANSFORM.LOWERCASE,
        null,
        HEADLINE_TRANSFORM.CAPITALIZE,
      ]}
    >
      Test
    </Headline>
  );
  expect(
    component.hasClass(
      "sg-headline--uppercase md:sg-headline--lowercase xl:sg-headline--capitalize"
    )
  ).toEqual(true);
});
test("extra bold", () => {
  const headline = shallow(<Headline extraBold>Test</Headline>);
  expect(headline.hasClass("sg-headline--extra-bold")).toBeTruthy();
});
it("extraBold is responsive prop", () => {
  const component = shallow(
    <Headline extraBold={[true, false, null, true]}>Test</Headline>
  );
  expect(
    component.hasClass(
      "sg-headline--extra-bold md:sg-headline--no-bold xl:sg-headline--extra-bold"
    )
  ).toEqual(true);
});
test("extra align left", () => {
  const headline = shallow(
    <Headline align={HEADLINE_ALIGN.LEFT}>Test</Headline>
  );
  expect(headline.hasClass("sg-headline--to-left")).toBeTruthy();
});
it("align is responsive prop", () => {
  const component = shallow(
    <Headline
      align={[
        HEADLINE_ALIGN.LEFT,
        HEADLINE_ALIGN.RIGHT,
        null,
        HEADLINE_ALIGN.LEFT,
      ]}
    >
      Test
    </Headline>
  );
  expect(
    component.hasClass(
      "sg-headline--to-left md:sg-headline--to-right xl:sg-headline--to-left"
    )
  ).toEqual(true);
});