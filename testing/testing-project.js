export function capitalize(string) {
  let array = string.toLowerCase().split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}

export function reverseString(string) {
  let array = string.split("");
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray.join("");
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export function cipher(string, shiftFactor) {
  let array = string.split("");
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let charCode = array[i].charCodeAt();

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      charCode += shiftFactor;
      if (charCode < 90 && charCode > 97) {
        charCode = 65;
      } else if (charCode > 122) {
        charCode = 97;
      }
    }
    newArray.push(String.fromCharCode(charCode));
  }
  return newArray.join("");
}

export function analyzeArray(array) {
  const sum = array.reduce((accumulator, current) => {
    return accumulator + current;
  });

  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return { average, min, max, length: array.length };
}

[2, 4, 6, 8];

{
  average: 5;
  min: 2;
  max: 8;
  length: 4;
}
