// react
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// configs
import { RootState } from '@/configs';
// domain
import { PokemonEntity } from '../../domain';

interface PokeState {
    pokemonList: PokemonEntity[];
}

const initialPokeState: PokeState = {
    pokemonList: [],
};

const pokeSlice = createSlice({
    name: 'poke',
    initialState: initialPokeState,
    reducers: {
        setPokemonList: (state, action: PayloadAction<PokemonEntity[]>) => {
            state.pokemonList = action.payload;
        },
        cleanPokemonList: state => {
            state.pokemonList = [];
        },
    },
});

export const pokeReducer = pokeSlice.reducer;
export const pokeState = (state: RootState) => state.poke;
export const pokeActions = pokeSlice.actions;
