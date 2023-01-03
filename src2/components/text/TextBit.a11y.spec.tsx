import * as React from "react";
import { testA11y } from "../../axe";
import TextBit from "./TextBit";
describe("TextBit a11y", () => {
  it("should have no a11y violations", async () => {
    await testA11y(<TextBit>Read more</TextBit>);
  });
});