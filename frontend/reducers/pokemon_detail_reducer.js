import React from 'react';
import { RECEIVE_POKEMON, REQUEST_POKEMON } from '../actions/pokemon_actions';
import merge from "lodash/merge";

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_POKEMON:
    // debugger;
      const newState = merge({}, state, action.pokemonDetail);
      return newState;

    default:
      return state;
  }
};


export default PokemonDetailReducer;
