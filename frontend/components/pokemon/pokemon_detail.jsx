import React from "react";

const PokemonDetail = ({pokemonDetail}) => (
  <ul>
    <img src={pokemonDetail.image_url}></img>
    <li>{pokemonDetail.name}</li>
    <li>{pokemonDetail.attack}</li>
    <li>{pokemonDetail.defense}</li>
    <li>{pokemonDetail.moves}</li>
    <li>{pokemonDetail.poke_type}</li>

  </ul>
);

export default PokemonDetail;
