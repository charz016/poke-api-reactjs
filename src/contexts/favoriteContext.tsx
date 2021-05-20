import * as React from "react";


export const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemon: (id:any) => {},
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;