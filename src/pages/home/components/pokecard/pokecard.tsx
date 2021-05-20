import *as React from "react";
import "./pokecard.scss"
import { Pokemon } from "../../../../models/pokemon";
import { Button } from "react-bootstrap";
import FavoriteContext from "../../../../contexts/favoriteContext";
import { Link } from "react-router-dom";

interface Props {
    pokemon: Pokemon;
}

const PokeCard: React.FC<Props> = (props) => {
    const { pokemon } = props;


    const { favoritePokemons, updateFavoritePokemon }: any = React.useContext(FavoriteContext);

    const clickHeart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        updateFavoritePokemon(pokemon.name);

    }


    return (
        <div className="pokemon-card">
            <div className="pokemon-imge-container">
                <img src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-img" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <h3>{pokemon.name}</h3>
                    </Link>
                    <div>#{pokemon.id}</div>
                </div>

                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div className={`type-container-${type.type.name}`} key={index} style={{ marginLeft: "10px" }}>{type.type.name}</div>
                            )
                        })}
                    </div>

                    {favoritePokemons.includes(pokemon.name) ? <Button variant="light" onClick={clickHeart}>❤️</Button> : <Button variant="light" onClick={clickHeart}>💙</Button>}
                </div>
            </div>
        </div>
    )
}

export { PokeCard };