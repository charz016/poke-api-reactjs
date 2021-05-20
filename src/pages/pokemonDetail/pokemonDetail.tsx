import *as React from "react";
import './pokemonDetail.scss';
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter } from 'react-router-dom';
import { RootState } from "../../store/reducers";
import { getPokemonDetail } from "../../store/actions/pokemons";
import { Carousel, Spinner } from "react-bootstrap";


interface RouterParams {
    pokemon: string;
}

const PokemonDetail: React.FC = () => {

    const params = useParams<RouterParams>();
    const pokemon = useSelector((state: RootState) => state.pokemonDetail);


    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(getPokemonDetail(params.pokemon));
    }, [])


    const carrousel = () => {

        return (<Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pokemon.data.sprites?.front_default}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pokemon.data.sprites?.back_default}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pokemon.data.sprites?.front_shiny}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        );

    }

    return (
        <div>
            {pokemon.loading ?
                <div className="loading-container">
                    <Spinner animation="border" variant="primary" />
                </div> :

                <div className="pokemon-info">

                    <div className="pokemon-info-container">
                        <div className="pokemon-info-container-carrousel">
                            {carrousel()}
                        </div>
                        <div className="pokemon-info-container-text">
                            <h1>{pokemon.data.name}</h1>
                            <div className="pokemon-info-container-text-status">
                                <div className="status-container">
                                    <p style={{ color: "black" }}>Id</p>
                                    <p>#{pokemon.data.id}</p>
                                </div>
                                <div className="status-container">
                                    <p style={{ color: "black" }}>Peso</p>
                                    <p>{pokemon.data.weight}</p>
                                </div>

                                <div className="status-container">
                                    <p style={{ color: "black" }}>Altura</p>
                                    <p>{pokemon.data.height}</p>
                                </div>

                                <div className="type-container">
                                    {pokemon.data.types?.map((type: any, index: any) => {
                                        return (
                                            <div className={`type-container-${type.type.name}`} key={index}>{type.type.name}</div>
                                        )
                                    })}
                                </div>


                            </div>
                        </div>
                    </div>

                </div>}
        </div>
    )
}

export default withRouter(PokemonDetail);
