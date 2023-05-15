import { memo, useEffect } from 'react';
import { usePoke } from '../../hooks';

const PokemonListView = memo(() => {
    const { pokemonList, requestPokemonList } = usePoke();

    useEffect(() => {
        requestPokemonList({ limit: 20, offset: 0 });
    }, [requestPokemonList]);

    return (
        <main>
            {pokemonList.map((value, index) => (
                <div key={index}>
                    <span>{value.name}</span>

                    <ul className="flex gap-2">
                        {value.sprites.map((imgURL, imgIndex) => (
                            <li key={`${index}_${imgIndex}`}>
                                <img src={imgURL} alt={`${value.name}_${imgIndex}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </main>
    );
});

export default PokemonListView;
