// react
import { memo } from 'react';
// providers
import { StoreProvider } from './contexts/core/store';
import { RoutesProvider } from './contexts/core/routes';
import { LoaderProvider } from './contexts/core/loader';
import { NotificationProvider } from './contexts/core/notification';

const App = memo(() => {
    return (
        <StoreProvider>
            <RoutesProvider />

            <LoaderProvider />

            <NotificationProvider />
        </StoreProvider>
    );
});

export default App;
