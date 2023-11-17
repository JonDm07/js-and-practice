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
