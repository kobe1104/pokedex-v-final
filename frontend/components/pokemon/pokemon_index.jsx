import React from "react";
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';

const PokemonIndex = ({pokemon}) => (
  <section className="pokedex">
    <ul>
      {pokemon.map( (poke) => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
    ))}
    </ul>
    <section class="pokemon-detail">
      <PokemonDetail />
    </section>
  </section>
);

export default PokemonIndex;
