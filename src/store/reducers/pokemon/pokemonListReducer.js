const defaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    total: 0,
}

const PokemonListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_POKEMON_LIST":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "GET_POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.pokemons,
                errorMsg: "",
                total: action.payload.count

            }
        case "GET_POKEMON_LIST_ERROR":
            return {
                ...state,
                loading: false,
                errorMsg: "unable get pokemon"
            }

        default: return state;
    }
}

export default PokemonListReducer;