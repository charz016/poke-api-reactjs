import * as React from "react"
import './home.scss';
import { Pokedex } from "./components/pokedex/pokedex"
import { Spinner } from "react-bootstrap";
import { Pagination } from "../../components/pagination/pagination";
import { FavoriteProvider } from "../../contexts/favoriteContext";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../../store/actions/pokemons";
import { RootState } from "../../store/reducers";



const Home: React.FC = () => {

  const [page, setPage] = React.useState(0);
  const [favorites, setFavorites] = React.useState([]);

  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemonList)

  const total = Math.ceil(pokemonList.total / 15);

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  }

  const nextPage = () => {
    const lastPage = Math.min(page + 1, total - 1);
    setPage(lastPage);
  }

  const updateFavoritePokemons = (name: any) => {
    const update: any = [...favorites];
    const isFavorite = update.indexOf(name);

    if (isFavorite >= 0) {
      update.splice(isFavorite, 1);
    } else {
      update.push(name);
    }

    setFavorites(update);
  }

  React.useEffect(() => {
    dispatch(getPokemonList(15, 15 * page))
  }, [page])

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemon: updateFavoritePokemons
      }}>

      <div >
        <div className="pagination-container">
          <h1>Pokedex</h1>
          <div><Pagination
            page={page + 1}
            totalPage={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          /></div>
        </div>
        {pokemonList.loading ?
          <div className="loading-container">
            <Spinner animation="border" variant="primary" />
          </div> :
          <Pokedex pokemons={pokemonList.data} />}
      </div>

    </FavoriteProvider>
  )
}
export { Home }