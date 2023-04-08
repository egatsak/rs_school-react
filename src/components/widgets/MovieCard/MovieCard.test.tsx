import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";

const mockMovie = {
  academyAwardNominations: 30,
  academyAwardWins: 17,
  boxOfficeRevenueInMillions: 2917,
  budgetInMillions: 281,
  name: "The Lord of the Rings Series",
  rottenTomatoesScore: 94,
  runtimeInMinutes: 558,
  id: "5cd95395de30eff6ebccde56",
  imageLink:
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
};

describe("CARD", () => {
  test("renders card correctly", () => {
    render(<MovieCard {...mockMovie} />);
    /* 
    const cardImage = screen.getByTestId("card-image");
    const cardHeading = screen.getByTestId("card-heading");
    const cardSubHeading = screen.getByTestId("card-subheading");
    const cardPrice = screen.getByTestId("card-price");
    const cardDescription = screen.getByTestId("card-description");

    expect(cardImage).toBeInTheDocument();
    expect(cardHeading.textContent).toEqual(mockBook.title);
    expect(cardSubHeading.textContent).toEqual(mockBook.author);
    expect(cardPrice.textContent).toEqual(`${mockBook.price} $`);
    expect(cardDescription.textContent).toEqual(mockBook.description); */
  });
});
