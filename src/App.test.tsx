import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "./test/componentRender";

import { App } from "./App";
import { LOCAL_STORAGE_INPUT_KEY } from "./constants";

describe("APP", () => {
  test("renders main page correctly", () => {
    componentRender(<App />, { route: "/" });
    const mainPageHeader = screen.getByText("MainPage");

    expect(mainPageHeader).toBeInTheDocument();
  });

  test("renders about page correctly", () => {
    componentRender(<App />, { route: "/about" });
    const aboutPageHeader = screen.getByText("AboutPage");

    expect(aboutPageHeader).toBeInTheDocument();
  });

  test("renders fallback page correctly", () => {
    componentRender(<App />, { route: "/123321" });
    const notFoundPageHeader = screen.getByText("NotFoundPage");

    expect(notFoundPageHeader).toBeInTheDocument();
  });

  test("click on about page link routes to about page", async () => {
    componentRender(<App />);
    const aboutLink = screen.getByTestId("about-link");
    await userEvent.click(aboutLink);
    const aboutPageHeader = screen.getByText("AboutPage");

    expect(aboutPageHeader).toBeInTheDocument();
  });

  test("input text is set to localstorage on leaving main page", async () => {
    componentRender(<App />);
    const input = screen.getByTestId("input");
    const aboutLink = screen.getByTestId("about-link");
    const mainLink = screen.getByTestId("main-link");

    const userInput = "12345";
    await userEvent.type(input, userInput);

    expect(localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual("");

    await userEvent.click(aboutLink);
    const aboutPageHeader = screen.getByText("AboutPage");

    expect(aboutPageHeader).toBeInTheDocument();
    expect(localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual(userInput);

    await userEvent.click(mainLink);

    expect(screen.getByDisplayValue(userInput)).toBeInTheDocument();
  });
});
