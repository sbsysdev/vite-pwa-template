// react
import { Suspense, memo } from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
// views
import { PokemonListView } from '@/contexts/poke/infra/views';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Link to="/pokemons">Pokemon List</Link>,
    },
    {
        path: '/pokemons',
        element: <PokemonListView />,
    },
]);

// configure loader into app
export const RoutesConfig = memo(() => {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <RouterProvider router={routes} />
        </Suspense>
    );
});
