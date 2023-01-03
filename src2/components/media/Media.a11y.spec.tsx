import * as React from "react";
import { testA11y } from "../../axe";
import Media from "./Media";
describe("Media a11y", () => {
  it("should have no a11y violations", async () => {
    await testA11y(<Media aside="Aside" contentArray={["item1", "item2"]} />);
  });
});