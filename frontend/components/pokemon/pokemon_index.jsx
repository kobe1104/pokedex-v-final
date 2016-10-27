import React from "react";

const PokemonIndex = ({pokemon}) => (

  <ul>
    {pokemon.map((poke, index) => (
      <li className="pokemon-index-item" key={index}>{poke.id}<img src={poke.image_url}></img>{poke.name}</li>
  ))}
  </ul>
);

export default PokemonIndex;
