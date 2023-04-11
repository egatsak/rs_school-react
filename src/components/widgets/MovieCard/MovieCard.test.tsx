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

describe("MOVIECARD", () => {
  test("renders card correctly", () => {
    render(<MovieCard {...mockMovie} />);

    const cardImage = screen.getByTestId("card-image");
    const cardHeading = screen.getByTestId("card-heading");
    const cardRuntime = screen.getByTestId("card-runtime");
    const cardAwards = screen.getByTestId("card-awards");
    const cardBudget = screen.getByTestId("card-budget");

    expect(cardImage).toBeInTheDocument();
    expect(cardHeading.textContent).toEqual(mockMovie.name);
    expect(cardRuntime.textContent).toEqual(`${mockMovie.runtimeInMinutes} min.`);
    expect(cardAwards.textContent).toEqual(`${mockMovie.academyAwardWins} Academy Awards`);
    expect(cardBudget.textContent).toEqual(`Budget: ${mockMovie.budgetInMillions} mln $`);
  });

  test("renders concise card correctly", () => {
    render(<MovieCard isConcise {...mockMovie} />);

    const cardImage = screen.getByTestId("card-image");
    const cardHeading = screen.getByTestId("card-heading");
    const cardRuntime = screen.queryByTestId("card-runtime");
    const cardAwards = screen.queryByTestId("card-awards");
    const cardBudget = screen.queryByTestId("card-budget");

    expect(cardImage).toBeInTheDocument();
    expect(cardHeading.textContent).toEqual(mockMovie.name);
    expect(cardRuntime).toBeNull();
    expect(cardAwards).toBeNull();
    expect(cardBudget).toBeNull();
  });
});
