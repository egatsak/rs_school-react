import { capitalize } from "./capitalize";

describe("CAPITALIZE", () => {
  test("should return capitalized string", () => {
    expect(capitalize("abc")).toBe("Abc");
  });
});
