import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, REQUEST_ALL_POKEMON } from "./actions/pokemon_actions";
import { receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions";
import fetchAllPokemon from "./util/api_util";
import configureStore from "./store/store";
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root_component';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

document.addEventListener('DOMContentLoaded', () => {
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.selectAllPokemon = selectAllPokemon;

    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootEl);
    store.dispatch(requestAllPokemon());


});
