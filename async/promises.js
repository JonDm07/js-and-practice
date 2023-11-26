const path = "data/numbers.json";

async function printData(path) {
  try {
    let result = await fetch(path);
    const data = await result.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log("Failed");
  }
}

printData(path);

fetch(path)
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log("Failed");
  });
