// react
import { memo } from 'react';
// providers
import { LoaderConfig, NotificationConfig, RoutesConfig } from './configs';
import { StoreProvider } from './contexts/core';

const App = memo(() => {
    return (
        <StoreProvider>
            <RoutesConfig />

            <LoaderConfig />

            <NotificationConfig />
        </StoreProvider>
    );
});

export default App;
