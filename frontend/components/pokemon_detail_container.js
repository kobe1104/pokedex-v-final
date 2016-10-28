import { connect } from 'react-redux';
import {selectPokemon} from '../reducers/selectors';
import PokemonDetail from "./pokemon/pokemon_detail";
import { receivePokemon, requestPokemon } from "../actions/pokemon_actions";


const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: () => dispatch(requestPokemon()),
  receivePokemon: pokemonDetail => dispatch(receivePokemon(pokemonDetail))
});

export default connect(
  mapStateToProps
)(PokemonDetail);
