import { screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { componentRender } from "./test/componentRender";
import { App } from "./App";
import { LOCAL_STORAGE_INPUT_KEY } from "./constants";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, { shallow: true });

describe("APP", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("renders main page correctly", () => {
    componentRender(<App />, { route: "/" });
    const mainPageHeader = screen.getByText("The Lord of The Rings Movies");
    const api = mockedAxios;
    expect(api).not.toHaveBeenCalled();
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
    const mainLink = screen.getByTestId("main-link");

    await userEvent.click(aboutLink);
    const aboutPageHeader = screen.getByText("AboutPage");

    expect(aboutPageHeader).toBeInTheDocument();

    expect(aboutLink).toHaveClass("active");
    expect(mainLink).not.toHaveClass("active");
  });

  test("input text is set to localstorage on leaving main page", async () => {
    componentRender(<App />);
    const input = screen.getByTestId("input");
    const aboutLink = screen.getByTestId("about-link");
    const mainLink = screen.getByTestId("main-link");

    const userInput = "12345";
    await userEvent.type(input, userInput);

    expect(localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual("12345");

    await userEvent.click(aboutLink);
    const aboutPageHeader = screen.getByText("AboutPage");

    expect(aboutPageHeader).toBeInTheDocument();
    expect(localStorage.getItem(LOCAL_STORAGE_INPUT_KEY)).toEqual(userInput);

    await userEvent.click(mainLink);

    expect(screen.getByDisplayValue(userInput)).toBeInTheDocument();
  });

  test("click on form page link routes to form page", async () => {
    componentRender(<App />);
    const formLink = screen.getByTestId("form-link");
    const mainLink = screen.getByTestId("main-link");

    await userEvent.click(formLink);
    const formPageHeader = screen.getByText("FormPage");

    expect(formPageHeader).toBeInTheDocument();

    expect(formLink).toHaveClass("active");
    expect(mainLink).not.toHaveClass("active");
  });
});
