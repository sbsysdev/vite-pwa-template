// react
import { memo } from 'react';
// providers
import { LoaderConfig, NotificationConfig } from './configs';
import { RoutesProvider, StoreProvider } from './contexts/core';

const App = memo(() => {
    return (
        <StoreProvider>
            <RoutesProvider />

            <LoaderConfig />

            <NotificationConfig />
        </StoreProvider>
    );
});

export default App;
