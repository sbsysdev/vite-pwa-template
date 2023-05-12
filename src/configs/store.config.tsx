// react
import { memo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// types
import { Slot } from '@/shared/types';
// reducers
import { loaderReducer } from '@/shared/reducers';
// utils
import { content } from '@/shared/utils';

// configure redux store
const store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
});

// store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// configure store into app
interface StoreConfigProps {
    children?: Slot;
}
export const StoreConfig = memo(({ children }: StoreConfigProps) => {
    return <Provider store={store}>{content(children, null)}</Provider>;
});
