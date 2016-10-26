import React from "react";

const fetchAllPokemon = success => {
  $.ajax(
    {
      method: 'GET',
      url: "api/pokemon",
      success
    }
  );
};

export default fetchAllPokemon;
