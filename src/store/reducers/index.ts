import { combineReducers } from "redux";
import PokemonDetailReducer from "./pokemon/pokemonDetailReducer";
import PokemonListReducer from "./pokemon/pokemonListReducer"

export const rootReducer = combineReducers({
    pokemonList: PokemonListReducer,
    pokemonDetail: PokemonDetailReducer
})

export type RootState = ReturnType<typeof rootReducer>;
