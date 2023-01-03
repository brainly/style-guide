import * as React from "react";
import { render } from "@testing-library/react";
import { testA11y } from "../../axe";
import Spinner from "./Spinner";
describe("Spinner", () => {
  it("should have a role status", () => {
    const spinner = render(<Spinner />);
    expect(spinner.getByRole("status")).toBeTruthy();
  });
  it("should announce loading information", () => {
    const spinner = render(<Spinner />);
    expect(spinner.getByRole("status").getAttribute("aria-live")).toBe(
      "assertive"
    );
  });
});
describe("Spinner a11y", () => {
  it("should have no a11y violations", async () => {
    await testA11y(<Spinner />);
  });
});