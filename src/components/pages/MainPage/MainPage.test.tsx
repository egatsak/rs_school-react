import { fireEvent, screen } from "@testing-library/react";
import MainPage from "./MainPage";

import { MovieMapped } from "../../../shared/types/movies";
import { componentRender } from "../../../test/componentRender";
import axios from "axios";
import { LOCAL_STORAGE_INPUT_KEY } from "../../../constants";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);
mockedAxios.create.mockImplementation();

function hasInputValue(e: Element, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

const mockMoviesCards: MovieMapped[] = [
  {
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
    imageLink:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
  },
];

describe("MAINPAGE", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("renders main page correctly", async () => {
    componentRender(<MainPage />);

    mockedAxios.get.mockReturnValue(Promise.resolve({ mockMoviesCards }));
    const input = screen.getByTestId("input");

    expect(window.localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual(null);
    fireEvent.change(input, { target: { value: "the" } });
    fireEvent.click(screen.getByText("Submit"));
    expect(window.localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual("the");
  });

  test("renders main page & input correctly", async () => {
    componentRender(<MainPage />);

    mockedAxios.get.mockReturnValue(Promise.resolve({ mockMoviesCards }));
    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "the" } });
    expect(window.localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual("the");

    fireEvent.click(screen.getByText("Submit"));

    expect(window.localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual("the");
    expect(hasInputValue(input, "the")).toBe(true);
  });
});
