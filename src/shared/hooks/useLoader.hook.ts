// react
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// store
import { loaderActions, loaderState } from '@/shared/reducers';

export const useLoader = () => {
    // state
    const { isLoading } = useSelector(loaderState);
    const dispatch = useDispatch();

    const showLoader = useCallback(() => {
        dispatch(loaderActions.showLoader());
    }, [dispatch]);

    const hideLoader = useCallback(() => {
        dispatch(loaderActions.hideLoader());
    }, [dispatch]);

    return { isLoading, showLoader, hideLoader };
};
