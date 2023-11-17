import { capitalize } from "./testing-project";

test("capitalize", () => {
  expect(capitalize("string")).toBe("String");
});

test("capitalize", () => {
  expect(capitalize("HEllo")).toBe("Hello");
});

test("capitalize", () => {
  expect(capitalize("123")).toBe("123");
});
test("capitalize", () => {
  expect(capitalize("Hello World")).toBe("Hello world");
});
