// react
import { useDispatch, useSelector } from 'react-redux';
// store
import { loaderActions, loaderState } from '@/shared/reducers';
import { useCallback } from 'react';

export const useLoader = () => {
    // state
    const { isLoading } = useSelector(loaderState);
    const dispatch = useDispatch();

    const showLoader = useCallback(() => {
        if (isLoading) return;

        dispatch(loaderActions.showLoader());
    }, [dispatch, isLoading]);

    const hideLoader = useCallback(() => {
        if (!isLoading) return;

        dispatch(loaderActions.hideLoader());
    }, [dispatch, isLoading]);

    return { isLoading, showLoader, hideLoader };
};
