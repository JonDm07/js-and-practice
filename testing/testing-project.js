export function capitalize(string) {
  let array = string.toLowerCase().split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}
