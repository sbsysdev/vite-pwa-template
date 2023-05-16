// react
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// store
import { notificationActions, notificationState } from '../reducers';
// types
import { StandardNotification } from '../types';
// utils
import { v4 } from 'uuid';

export const useNotification = () => {
    // states
    const { notificationList } = useSelector(notificationState);
    const dispatch = useDispatch();

    const removeNotification = useCallback(
        (notificationID: string) => {
            dispatch(notificationActions.removeNotification(notificationID));
        },
        [dispatch]
    );

    const addNotification = useCallback(
        <T extends StandardNotification>(notification: T): void => {
            if (!notification.ID) notification.ID = v4();

            if (!notification.time) notification.time = Date.now();

            if (!notification.timeout) notification.timeout = 5 * 1000;

            dispatch(notificationActions.addNotification(notification));

            const keepNotification = () => {
                const interval = Date.now() - (notification.time as number);

                if (interval < (notification.timeout as number))
                    requestAnimationFrame(keepNotification);
                else removeNotification(notification.ID as string);
            };

            requestAnimationFrame(keepNotification);
        },
        [dispatch, removeNotification]
    );

    return { notificationList, addNotification, removeNotification };
};
