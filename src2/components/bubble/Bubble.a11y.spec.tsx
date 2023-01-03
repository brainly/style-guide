import * as React from "react";
import { testA11y } from "../../axe";
import Bubble from "./Bubble";
describe("Bubble a11y", () => {
  it("should have no a11y violations", async () => {
    await testA11y(<Bubble>item</Bubble>);
  });
});