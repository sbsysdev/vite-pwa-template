// react
import { memo } from 'react';
// providers
import { LanguageProvider } from './contexts/core/language';
import { StoreProvider } from './contexts/core/store';
import { RoutesProvider } from './contexts/core/routes';
import { LoaderProvider } from './contexts/core/loader';
import { NotificationProvider } from './contexts/core/notification';
import { PWAProvider } from './contexts/core/pwa';

const App = memo(() => {
    return (
        <LanguageProvider>
            <StoreProvider>
                <RoutesProvider />

                <LoaderProvider />

                <NotificationProvider />

                <PWAProvider />
            </StoreProvider>
        </LanguageProvider>
    );
});

export default App;
