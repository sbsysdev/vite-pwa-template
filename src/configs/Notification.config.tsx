// react
import { memo } from 'react';
// types
import { Alignment } from '@/shared/types';

interface NotificationConfigProps {
    verticalAligment?: Alignment;
    horizontalAligment?: Alignment;
    timeout?: number;
}

export const NotificationConfig = memo(
    ({
        verticalAligment = 'start',
        horizontalAligment = 'end',
        timeout = 5 * 1000,
    }: NotificationConfigProps) => {
        console.log(verticalAligment, horizontalAligment, timeout);

        return (
            <div className="fixed inset-0 p-4 z-[300] flex flex-col justify-center items-center overflow-hidden"></div>
        );
    }
);
