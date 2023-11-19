import {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analyzeArray,
} from "./testing-project";

test("capitalize", () => {
  expect(capitalize("string")).toBe("String");
  expect(capitalize("HEllo")).toBe("Hello");
  expect(capitalize("123")).toBe("123");
  expect(capitalize("Hello World")).toBe("Hello world");
});

test("reverse", () => {
  expect(reverseString("ab")).toBe("ba");
  expect(reverseString("String")).toBe("gnirtS");
  expect(reverseString("123")).toBe("321");
  expect(reverseString("ABC DFG")).toBe("GFD CBA");
});

test("add", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(10, 10)).toBe(20);
});

test("subtract", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(15, 10)).toBe(5);
});

test("divide", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(8, 4)).toBe(2);
});

test("multiply", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(6, 0)).toBe(0);
});

test("cipher", () => {
  expect(cipher("aa", 1)).toBe("bb");
  expect(cipher("AAbbCC", 2)).toBe("CCddEE");
  expect(cipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
  expect(cipher(`"Hello there"`, 2)).toBe(`"Jgnnq vjgtg"`);
});

test("analyze", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([2, 4, 6, 8])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 4,
  });
});
