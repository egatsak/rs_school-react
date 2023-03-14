import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "./test/componentRender";

import { App } from "./App";

describe("APP", () => {
  test("renders & handles counter correctly", async () => {
    componentRender(<App />);
    const buttonCount = screen.getByTestId("incrementBtn");

    expect(buttonCount.innerHTML).toBe("count is 0");

    await userEvent.click(buttonCount);
    await userEvent.click(buttonCount);

    expect(buttonCount.innerHTML).toBe("count is 2");
  });

  test("renders main page correctly", () => {
    componentRender(<App />, { route: "/" });
    const mainPageHeader = screen.getByText("MainPage");

    expect(mainPageHeader).toBeInTheDocument();
  });

  test("renders about page correctly", () => {
    componentRender(<App />, { route: "/about" });
    const AboutPageHeader = screen.getByText("AboutPage");

    expect(AboutPageHeader).toBeInTheDocument();
  });

  test("renders fallback page correctly", () => {
    componentRender(<App />, { route: "/123321" });
    const notFoundPageHeader = screen.getByText("NotFoundPage");

    expect(notFoundPageHeader).toBeInTheDocument();
  });
});
