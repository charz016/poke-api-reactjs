import axios from "axios";

export const getPokemonList = (limit, offset) => async dispatch => {
    try {

        dispatch({
            type: "GET_POKEMON_LIST"
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

        const promises = res.data.results.map(async pokemon => {
            return await axios.get(pokemon.url);
        })

        const results = await Promise.all(promises);

        const data ={
            count : res.data.count,
            pokemons : results.map(pokemon => pokemon.data)
        }

        dispatch({
            type: "GET_POKEMON_LIST_SUCCESS",
            payload: data
        })

    } catch (error) {

        dispatch({
            type: "GET_POKEMON_LIST_ERROR",
        })

    }

}


export const getPokemonDetail = (pokemon) => async dispatch => {
    try {

        dispatch({
            type: "GET_POKEMON_DETAIL"
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


        dispatch({
            type: "GET_POKEMON_DETAIL_SUCCESS",
            payload: res.data
        })

    } catch (error) {

        dispatch({
            type: "GET_POKEMON_DETAIL_ERROR",
        })

    }

}

