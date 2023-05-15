// react
import { memo } from 'react';
// hooks
import { useLoader } from '@/shared/hooks';
// components
import { Loader } from '@/shared/components';

// configure loader into app
export const LoaderConfig = memo(() => {
    const { isLoading } = useLoader();

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 p-4 z-[200] flex flex-col justify-center items-center overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900 bg-opacity-75" />

                    <span className="absolute flex flex-col justify-center items-center w-24 overflow-hidden text-primary-500">
                        <Loader />
                    </span>
                </div>
            )}
        </>
    );
});
