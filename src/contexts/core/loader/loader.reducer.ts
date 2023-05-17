// react
import { createSlice } from '@reduxjs/toolkit';
// store
import { AppState } from '..';

interface LoaderState {
    isLoading: boolean;
}

const initialLoaderState: LoaderState = {
    isLoading: false,
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialLoaderState,
    reducers: {
        showLoader: state => {
            state.isLoading = true;
        },
        hideLoader: state => {
            state.isLoading = false;
        },
    },
});

export const loaderReducer = loaderSlice.reducer;
export const loaderState = (state: AppState) => state.loader;
export const loaderActions = loaderSlice.actions;
