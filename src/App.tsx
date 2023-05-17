// react
import { memo } from 'react';
// providers
import { NotificationConfig } from './configs';
import { LoaderProvider, RoutesProvider, StoreProvider } from './contexts/core';

const App = memo(() => {
    return (
        <StoreProvider>
            <RoutesProvider />

            <LoaderProvider />

            <NotificationConfig />
        </StoreProvider>
    );
});

export default App;
