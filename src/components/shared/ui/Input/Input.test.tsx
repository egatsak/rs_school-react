import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

function hasInputValue(e: Element, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("INPUT", () => {
  test("renders input correctly", () => {
    render(<Input />);

    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "123321" } });

    expect(hasInputValue(input, "123321")).toBeTruthy();
  });

  test("renders input label correctly", () => {
    render(<Input label="Hello" />);
    const label = screen.getByText("Hello");
    expect(label).toBeInTheDocument();
  });

  test("renders input label with invalid message correctly", () => {
    render(<Input label="Hello" invalidMsg="Invalid value!" />);
    const invalidLabel = screen.getByText("Invalid value!");
    expect(invalidLabel).toBeInTheDocument();
  });
});
