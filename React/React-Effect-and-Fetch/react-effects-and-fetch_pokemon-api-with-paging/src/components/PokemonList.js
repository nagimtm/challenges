import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(pokemon);

  useEffect(() => {
    async function loadPokemon(page) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon(page);
  }, [page]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setPage(page ? page - 1 : 0);
          // console.log(page);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
          // console.log(page);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
