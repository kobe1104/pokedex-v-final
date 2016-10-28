import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const PokemonIndexItem = (props) => {
  
  const handleClick = url => e => props.router.push(url);

  return (
    <li className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${props.pokemon.id}`)}>
      {props.pokemon.id}
      <img src={props.pokemon.image_url}>
      </img>{props.pokemon.name}
    </li>
  );
};

export default withRouter(PokemonIndexItem);
