import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Modal } from "./Modal";

describe("MODAL", () => {
  test("appends the element when the component is mounted", () => {
    render(<Modal>HELLO</Modal>);
    debugger;
    const { getByText } = within(document.body);

    expect(document.body).toContainElement(getByText("HELLO"));
  });

  test("appends the element when the component is mounted", () => {
    render(<Modal>WORLD</Modal>);

    const { getByText } = within(document.body);

    expect(document.body).toContainElement(getByText("WORLD"));
  });
});
