import React from 'react';
import { RECEIVE_ALL_POKEMON, REQUEST_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from "lodash/merge";

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_ALL_POKEMON:
      const newPoke = { [action.pokemon.id]: action.pokemon };
      const newState = merge({}, state, newPoke);
      return newState;

    default:
      return state;
  }
};


export default PokemonReducer;
