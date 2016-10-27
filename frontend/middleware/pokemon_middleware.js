import React from 'react';
import {fetchAllPokemon, fetchPokemon} from '../util/api_util';
import { REQUEST_ALL_POKEMON, REQUEST_POKEMON } from '../actions/pokemon_actions';
import { receiveAllPokemon, receivePokemon } from '../actions/pokemon_actions';


const PokemonMiddleware = ({ dispatch }) => next => action => {

  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonSuccess = data => dispatch(receivePokemon(data));

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      console.log("gotta fetch 'em all!");
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON:
      console.log("gotta fetch one!!");
      fetchPokemon(action.id, receivePokemonSuccess);
      return next(action);
    default:
      return next(action);
  }

};




export default PokemonMiddleware;
