const defaultState = {
    loading: false,
    data: {},
    errorMsg: "",
}

const PokemonDetailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_POKEMON_DETAIL":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "GET_POKEMON_DETAIL_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: "",
            }
        case "GET_POKEMON_DETAIL_ERROR":
            return {
                ...state,
                loading: false,
                errorMsg: "unable get pokemon"
            }

        default: return state;
    }
}

export default PokemonDetailReducer;