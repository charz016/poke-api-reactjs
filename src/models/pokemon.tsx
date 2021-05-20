export interface Pokemon {
    name: string;
    url: string;
    id: number;
    sprites: PokemonSprites;
    types: PokemonTypes[];
}

export interface PokemonSprites {
    back_default: string;
    front_default:string;
}

export interface PokemonTypes {
    type: PokemonType;
}

export interface PokemonType {
    name: string;
    url: string;

}