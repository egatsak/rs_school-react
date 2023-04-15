import { render, screen } from "@testing-library/react";
import { BOOKS } from "../../../constants";
import Card from "./Card";

const mockBook = BOOKS[0];

describe("CARD", () => {
  test("renders card correctly", () => {
    render(<Card {...mockBook} />);

    const cardImage = screen.getByTestId("card-image");
    const cardHeading = screen.getByTestId("card-heading");
    const cardSubHeading = screen.getByTestId("card-subheading");
    const cardPrice = screen.getByTestId("card-price");
    const cardDescription = screen.getByTestId("card-description");

    expect(cardImage).toBeInTheDocument();
    expect(cardHeading.textContent).toEqual(mockBook.title);
    expect(cardSubHeading.textContent).toEqual(mockBook.author);
    expect(cardPrice.textContent).toEqual(`${mockBook.price} $`);
    expect(cardDescription.textContent).toEqual(mockBook.description);
  });
});
