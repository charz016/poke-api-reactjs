import *as React from "react";
import './pokedex.scss';
import { Pokemon } from "../../../../models/pokemon";
import { PokeCard } from "../pokecard/pokecard";
import { FavoriteContext } from "../../../../contexts/favoriteContext";


interface Props {
    pokemons: Pokemon[];
}

const Pokedex: React.FC<Props> = (props) => {
    const { pokemons } = props;
    const { favoritePokemons }: any = React.useContext(FavoriteContext);

    return (
        <div>
            <div className="favorite-pokemon"><span >Pokemon Favoritos ❤️ : {favoritePokemons.length}</span></div>

            <div className="pokedex-grid">
                {pokemons.map((pokemon, index) => {
                    return (
                        <PokeCard key={pokemon.id} pokemon={pokemon} />
                    )
                })}

            </div>
        </div>
    )

}

export { Pokedex }