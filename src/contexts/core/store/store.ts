// react
import { configureStore } from '@reduxjs/toolkit';
// reducers
import { loaderReducer } from '../loader';
import { notificationReducer } from '../notification';
import { pokeReducer } from '@/contexts/poke/infra/reducers';

// configure redux store
export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        notification: notificationReducer,
        poke: pokeReducer,
    },
});
