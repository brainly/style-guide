import * as React from "react";
import { testA11y } from "../../axe";
import Flex from "./Flex";
describe("Flex a11y", () => {
  it("should have no a11y violations", async () => {
    await testA11y(
      <Flex>
        <div>item</div>
      </Flex>
    );
  });
});