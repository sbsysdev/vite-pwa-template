// react
import { useCallback } from 'react';
// store
import { loaderActions, loaderState, useAppDispatch, useAppSelector } from '..';

export const useLoader = () => {
    // state
    const { isLoading } = useAppSelector(loaderState);
    const dispatch = useAppDispatch();

    const showLoader = useCallback(() => {
        dispatch(loaderActions.showLoader());
    }, [dispatch]);

    const hideLoader = useCallback(() => {
        dispatch(loaderActions.hideLoader());
    }, [dispatch]);

    return { isLoading, showLoader, hideLoader };
};
