import React from 'react';
import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  return _.values(state.pokemonDetails.items[itemId]);
};
// export const selectPokemon = (state) => {
//   return _.values(state.pokemon);
// };
