import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, REQUEST_ALL_POKEMON } from "./actions/pokemon_actions";
import { receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions";
import fetchAllPokemon from "./util/api_util";
import configureStore from "./store/store";
import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.store = configureStore();
    window.selectAllPokemon = selectAllPokemon;

    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
