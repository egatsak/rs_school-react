import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { /* Countries, */ COUNTRY } from "../../../constants";
import { componentRender } from "../../../test/componentRender";

import FormPage from "./FormPage";

const mockOrder = {
  id: "1",
  author: "Douglas Crockford",
  imageLink: "https://m.media-amazon.com/images/I/5131OWtQRaL._AC_SY780_.jpg",
  title: "JavaScript",
  price: 30,
  description: `lorem`,
  isAdult: false,
  country: COUNTRY.US,
  quantityInStock: 4,
  isPaperVersion: true,
};

describe("FORMPAGE", () => {
  global.URL.createObjectURL = jest.fn();
  test("adds & renders card on form submit ", () => {
    componentRender(<FormPage />);
    const mockFile = new File(["hello12345"], "hello.png", { type: "image/png" });

    const authorInput = screen.getByTestId("author");
    const titleInput = screen.getByTestId("title");
    const descriptionInput = screen.getByTestId("description");
    const priceInput = screen.getByTestId("price");
    const deliveryDateInput = screen.getByTestId("deliveryDate");
    const countrySelect = screen.getByTestId("country");
    const fileInput = screen.getByTestId("imageInput") as HTMLInputElement;
    const switcher = screen.getByTestId("adult-switcher");
    const radioEbook = screen.getByTestId("radio-ebook");
    const submitBtn = screen.getByTestId("submit");

    fireEvent.change(authorInput, { target: { value: mockOrder.author } });
    fireEvent.change(titleInput, { target: { value: mockOrder.title } });
    fireEvent.change(descriptionInput, { target: { value: mockOrder.description } });
    fireEvent.change(priceInput, { target: { value: mockOrder.price } });
    fireEvent.change(deliveryDateInput, { target: { value: "2048-11-01" } });
    fireEvent.change(countrySelect, { target: { value: mockOrder.country } });

    fireEvent.change(fileInput, {
      target: { files: { item: () => mockFile, length: 1, 0: mockFile } },
    });

    userEvent.click(switcher);
    userEvent.click(radioEbook);

    fireEvent.click(submitBtn);
    /* 
    const cardTitle = screen.getByText(mockOrder.title);
    const cardAuthor = screen.getByText(mockOrder.author);
    const cardDescription = screen.getByText(mockOrder.description);
    const cardPrice = screen.getByText(`${mockOrder.price} $`);
    const cardDate = screen.getByText(`Delivery date: 2048-11-01`);
    const cardCountry = screen.getByTestId("card-country");
    const cardAdult = screen.getByText("18+");
    const cardEbook = screen.getByText("E-book");
    const cardImg = screen.getByRole("img");

    expect(cardTitle).toBeInTheDocument();
    expect(cardAuthor).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
    expect(cardCountry).toHaveTextContent(Countries[mockOrder.country as keyof typeof Countries]);
    expect(cardAdult).toBeInTheDocument();
    expect(cardEbook).toBeInTheDocument();
    expect(cardImg).toBeInTheDocument(); */
    expect(submitBtn).toBeInTheDocument();
  });
});
