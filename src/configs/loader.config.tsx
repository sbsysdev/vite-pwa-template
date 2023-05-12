// react
import { memo } from 'react';
// types
import { Slot } from '@/shared/types';
// hooks
import { useLoader } from '@/shared/hooks';
// utils
import { content } from '@/shared/utils';
// components
import { Loader } from '@/shared/components';

// configure loader into app
interface LoaderConfigProps {
    children?: Slot;
}
export const LoaderConfig = memo(({ children }: LoaderConfigProps) => {
    const { isLoading } = useLoader();

    return (
        <>
            {content(children)}

            {!isLoading && <Loader />}
        </>
    );
});
