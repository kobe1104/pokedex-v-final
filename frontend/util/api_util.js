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

const fetchPokemon = (id, success) => {
  $.ajax(
    {
      method: 'GET',
      url: `api/pokemon/${id}`,
      success
    }
  );
};

export {fetchAllPokemon, fetchPokemon};
