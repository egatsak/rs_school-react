import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Portal } from "./Portal";

describe("PORTAL", () => {
  test("appends the portal to created root", () => {
    const root = document.createElement("div");

    render(<Portal element={root}>HELLO</Portal>);

    const { getByText } = within(root);

    expect(root).toContainElement(getByText("HELLO"));
  });

  test("appends the portal to default root = document.body", () => {
    render(<Portal>WORLD</Portal>);

    const { getByText } = within(document.body);

    expect(document.body).toContainElement(getByText("WORLD"));
  });
});
