import React from 'react';



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

export default PokemonIndexItem;
