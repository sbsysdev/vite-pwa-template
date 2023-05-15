// react
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// store
import { pokeActions, pokeState } from '../reducers';
// hooks
import { useLoader } from '@/shared/hooks';
// use case
import { ApiPokemonRepository } from '../repos';
import { PokemonListQuery, PokemonListRequest } from '../../app';

export const usePoke = () => {
    // use case
    const pokemonRepository = useMemo(() => new ApiPokemonRepository(), []);
    const pokemonListUseCase = useMemo(
        () => new PokemonListQuery(pokemonRepository),
        [pokemonRepository]
    );

    // states
    const { pokemonList } = useSelector(pokeState);
    const dispatch = useDispatch();

    // utils
    const { showLoader, hideLoader } = useLoader();

    // get pokemon list from api service
    const requestPokemonList = useCallback(
        async (props: PokemonListRequest) => {
            showLoader();

            const [pokeList, pokeListError] = await pokemonListUseCase.query(props);

            if (pokeListError != null) {
                return hideLoader();
            }

            dispatch(pokeActions.setPokemonList(pokeList));

            hideLoader();
        },
        [dispatch, hideLoader, pokemonListUseCase, showLoader]
    );

    return { pokemonList, requestPokemonList };
};
