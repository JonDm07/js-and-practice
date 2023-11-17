import { capitalize, reverseString } from "./testing-project";

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

test("reverse", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("reverse", () => {
  expect(reverseString("String")).toBe("gnirtS");
});

test("reverse", () => {
  expect(reverseString("123")).toBe("321");
});

test("reverse", () => {
  expect(reverseString("ABC DFG")).toBe("GFD CBA");
});
