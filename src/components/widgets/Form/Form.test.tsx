import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

function hasInputValue(e: Element, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("FORM", () => {
  test("renders form correctly", () => {
    render(<Form addCard={jest.fn()} />);

    const form = screen.getByTestId("form");

    expect(form).toBeInTheDocument();

    const authorInput = screen.getByTestId("author");
    const titleInput = screen.getByTestId("title");
    const descriptionInput = screen.getByTestId("description");
    const priceInput = screen.getByTestId("price");
    const deliveryDateInput = screen.getByTestId("deliveryDate");
    const countrySelect = screen.getByTestId("country");
    const fileInput = screen.getByTestId("imageInput");
    const switcher = screen.getByTestId("adult-switcher");
    const radioPaper = screen.getByTestId("radio-paper");
    const radioEbook = screen.getByTestId("radio-ebook");
    const submitBtn = screen.getByTestId("submit");

    expect(authorInput).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(deliveryDateInput).toBeInTheDocument();
    expect(countrySelect).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(switcher).toBeInTheDocument();
    expect(radioPaper).toBeInTheDocument();
    expect(radioEbook).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  test("submits form correctly", async () => {
    const onSubmit = jest.fn();
    const mockFile = new File(["hello123"], "hello.png", { type: "image/png" });

    render(<Form addCard={onSubmit} />);

    const form = screen.getByTestId("form");

    expect(form).toBeInTheDocument();

    const authorInput = screen.getByTestId("author");
    const titleInput = screen.getByTestId("title");
    const descriptionInput = screen.getByTestId("description");
    const priceInput = screen.getByTestId("price");
    const deliveryDateInput = screen.getByTestId("deliveryDate");
    const countrySelect = screen.getByTestId("country");
    const fileInput = screen.getByTestId("imageInput") as HTMLInputElement;
    const switcher = screen.getByTestId("adult-switcher");
    const radioPaper = screen.getByTestId("radio-paper");
    const radioEbook = screen.getByTestId("radio-ebook");
    const submitBtn = screen.getByTestId("submit");

    fireEvent.change(authorInput, { target: { value: "Harry Potter" } });
    fireEvent.change(titleInput, { target: { value: "J. Rowling" } });
    fireEvent.change(descriptionInput, { target: { value: "Lorem ipsum" } });
    fireEvent.change(priceInput, { target: { value: 10 } });
    fireEvent.change(deliveryDateInput, { target: { value: "2030-11-01" } });
    fireEvent.change(countrySelect, { target: { value: "US" } });

    await act(async () => {
      await waitFor(() => {
        userEvent.upload(fileInput, mockFile);
      });
    });

    // userEvent.upload(fileInput, mockFile);
    /*     userEvent.click(switcher);
    userEvent.click(radioEbook); */
    fireEvent.click(submitBtn);

    expect(hasInputValue(authorInput, "Harry Potter")).toBeTruthy();
    expect(hasInputValue(titleInput, "J. Rowling")).toBeTruthy();

    expect(hasInputValue(descriptionInput, "Lorem ipsum")).toBeTruthy();

    expect(hasInputValue(priceInput, "10")).toBeTruthy();

    expect(hasInputValue(deliveryDateInput, "2030-11-01")).toBeTruthy();

    expect(hasInputValue(countrySelect, "United States")).toBeTruthy();
    console.log(fileInput.files![0]);
    //expect(onSubmit).toHaveBeenCalled();
  });
});
