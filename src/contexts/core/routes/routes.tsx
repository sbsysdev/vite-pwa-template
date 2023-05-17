// react
import { Link, createBrowserRouter } from 'react-router-dom';
// views
import { PokemonListView } from '@/contexts/poke/infra/views';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Link to="/pokemons">Pokemon List</Link>,
    },
    {
        path: '/pokemons',
        element: <PokemonListView />,
    },
]);
