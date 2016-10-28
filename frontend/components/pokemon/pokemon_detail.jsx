import React from "react";


const PokemonDetail = ({pokemonDetail, children}) => (
    <ul>
      <li><img src={pokemonDetail.image_url}></img></li>
      <li>{pokemonDetail.name}</li>
      <li>{pokemonDetail.attack}</li>
      <li>{pokemonDetail.defense}</li>
      <li>{pokemonDetail.moves}</li>
      <li>{pokemonDetail.poke_type}</li>

      <section>{children}</section>
    </ul>

  );
export default PokemonDetail;
