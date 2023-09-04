import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  try {
    const res = await fetch("https://swapi.dev/api/people"); // ?
    const data = await res.json();
    const results = data.results;

    // console.log(results);
    // for (let result of results) {
    //   console.log(result.name, result.eye_color, result.birth_year);
    //   const card = Card(result);
    //   renderElement(card);
    // }
    results.forEach((result) => {
      console.log(result);
      const card = Card(result);
      renderElement(card);
      // console.log(card);
    });
  } catch {
    const errMessage = "Something went wrong!";
    console.log(errMessage);
  }
}
