import * as React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import './searchBar.scss';
import { SearchPokemon } from "../../services/pokeApi";


const SearchBar = () => {
    const [search, setSerach] = React.useState('');


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSerach(e.target.value);
    }

    const OnSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
            const data = await SearchPokemon(search);
    }

    return (
        <div className="search-div">
            <div className="search-content">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Bucar un Pokemon"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={onChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={OnSearch}>Buscar</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    )

}

export { SearchBar }