import { DomainError, DomainResponse } from '@/contexts/shared/domain';
import { PokemonEntity } from '.';

export type PokemonRepositoryError = `pokemonRepository.${``}`;

export type PokemonRepositoryReadAllProps = {
    limit: number;
    offset: number;
};

export interface PokemonRepository {
    readAll(
        props: PokemonRepositoryReadAllProps
    ): Promise<DomainResponse<PokemonEntity[], DomainError<PokemonRepositoryError>>>;
    readById(
        pokemonID: number
    ): Promise<DomainResponse<PokemonEntity, DomainError<PokemonRepositoryError>>>;
}
