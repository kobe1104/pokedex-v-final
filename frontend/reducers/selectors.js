import React from 'react';
import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.pokemon);
};

// export const selectPokemon = (state) => {
//   return _.values(state.pokemon);
// };
