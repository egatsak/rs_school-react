import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./Select";

const mockCountries = {
  US: "United States",
  BY: "Belarus",
  GE: "Georgia",
};

const options = Object.entries(mockCountries).map((item) => ({ optionValue: item[0], optionLabel: item[1] }));

describe("SELECT", () => {
  test("renders select correctly", () => {
    render(<Select name="selecttest" options={options} />);

    const select = screen.getByTestId("select");

    expect(select).toBeInTheDocument();

    const renderedOptions = screen.getAllByTestId("select-option") as HTMLOptionElement[];

    expect(renderedOptions[0].selected).toBeFalsy();
    expect(renderedOptions[1].selected).toBeFalsy();
    expect(renderedOptions[2].selected).toBeFalsy();

    fireEvent.change(select, { target: { value: "US" } });

    expect(renderedOptions[0].selected).toBeTruthy();
  });
});
