import * as React from "react";
import { render } from "@testing-library/react";
import { testA11y } from "../../axe";
import SeparatorHorizontal from "./SeparatorHorizontal";
describe("SeparatorHorizontal", () => {
  it('should have role="separator"', () => {
    const separator = render(<SeparatorHorizontal />);
    expect(separator.getByRole("separator")).toBeTruthy();
  });
});
describe("SeparatorHorizontal a11y", () => {
  it("should have no a11y violations", async () => {
    await testA11y(<SeparatorHorizontal />);
  });
});