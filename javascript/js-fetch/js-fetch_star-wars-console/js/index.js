console.clear();
import { renderElement } from "./utils.js";

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const res = await fetch(url);

    const data = await res.json();
    const results = data.results;
    for (let result of results) {
      if (result.name == "R2-D2") {
        console.log(result.eye_color);
      }
    }
  } catch {
    const errMesage = "Something went wrong!";
    console.log(errMesage);
  }
}

fetchData();
