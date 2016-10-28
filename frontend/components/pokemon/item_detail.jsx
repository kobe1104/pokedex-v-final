import React from 'react';

const ItemDetail = (props) => (
  <ul>
    <li><img src={props.image_url}></img></li>
    <li>{props.name}</li>
    <li>{props.pokemon_id}</li>
    <li>{props.price}</li>
    <li>{props.happiness}</li>
  </ul>
);

export default ItemDetail;
