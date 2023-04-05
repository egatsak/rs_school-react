import { capitalize } from "./capitalize";

describe("CAPITALIZE", () => {
  test("should return capitalized string", () => {
    expect(capitalize("abc")).toBe("Abc");
  });

  test("should return the same string if already capitalized", () => {
    expect(capitalize("ABC 123")).toBe("ABC 123");
  });

  test("should return empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
