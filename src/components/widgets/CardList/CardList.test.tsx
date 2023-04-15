import { render, screen } from "@testing-library/react";
import { BOOKS } from "../../../constants";
import CardList from "./CardList";
import { MovieMapped } from "../../../shared/types/movies";

const mockBooks = BOOKS;

const mockMovies: MovieMapped[] = [
  {
    academyAwardNominations: 30,
    academyAwardWins: 17,
    boxOfficeRevenueInMillions: 2917,
    budgetInMillions: 281,
    name: "The Lord of the Rings Series",
    rottenTomatoesScore: 94,
    runtimeInMinutes: 558,
    id: "5cd95395de30eff6ebccde56",
    _id: "5cd95395de30eff6ebccde56",

    imageLink:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    academyAwardNominations: 1,
    academyAwardWins: 17,
    boxOfficeRevenueInMillions: 2918,
    budgetInMillions: 281,
    name: "The Lord of the Rings Series123",
    rottenTomatoesScore: 94,
    runtimeInMinutes: 559,
    id: "5cd95395de30eff6ebccde57",
    _id: "5cd95395de30eff6ebccde57",

    imageLink:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
  },
];

describe("CARDLIST", () => {
  test("renders books cardlist correctly", () => {
    render(<CardList data={mockBooks} />);

    const wrapper = screen.getByTestId("cardlist-wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.childNodes.length).toEqual(mockBooks.length);
  });

  test("renders movies cardlist correctly", () => {
    render(<CardList data={mockMovies} />);

    const wrapper = screen.getByTestId("cardlist-wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.childNodes.length).toEqual(mockMovies.length);
  });

  test("renders empty cardlist correctly", () => {
    render(<CardList data={[]} />);

    const wrapper = screen.getByTestId("cardlist-wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.childNodes.length).toEqual(0);
  });
});
