import { Provider } from 'react-redux';
import React from 'react';
import PokemonContainer from './pokemon_index_container';
import PokemonDetailContainer from './pokemon_detail_container';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import {requestPokemon} from '../actions/pokemon_actions';
import ItemDetailContainer from './item_detail_container';

const Root = ({ store }) => {
  const requestSinglePokemon = (nextState) => {
    store.dispatch(requestPokemon(nextState.params.pokemonId));
  };
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={PokemonContainer}>
          <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} onEnter={requestSinglePokemon} />
            <Route path='pokemon/item/:itemId' component={ItemDetailContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
