import * as React from "react";
import { render } from "@testing-library/react";
import { testA11y } from "../../axe";
import HomeButton from "./HomeButton";
describe("HomeButton", () => {
  it("should have a label", () => {
    const logo = render(<HomeButton />);
    expect(logo.getByLabelText("brainly home")).toBeTruthy();
  });
});
describe("HomeButton a11y", () => {
  it("should have no a11y violations", async () => {
    await testA11y(<HomeButton />);
  });
});