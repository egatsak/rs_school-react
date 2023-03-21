import { render, screen } from "@testing-library/react";
import { BOOKS } from "../../../constants";
import CardList from "./CardList";

const mockBooks = BOOKS;

describe("CARDLIST", () => {
  test("renders cardlist correctly", () => {
    render(<CardList data={mockBooks} />);

    const wrapper = screen.getByTestId("cardlist-wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.childNodes.length).toEqual(mockBooks.length);
  });

  test("renders empty cardlist correctly", () => {
    render(<CardList data={[]} />);

    const wrapper = screen.getByTestId("cardlist-wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.childNodes.length).toEqual(0);
  });
});
