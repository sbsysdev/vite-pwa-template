// react
import { memo } from 'react';
// configs
import { LoaderConfig, NotificationConfig, RoutesConfig, StoreConfig } from './configs';

const App = memo(() => {
    return (
        <StoreConfig>
            <RoutesConfig />

            <LoaderConfig />

            <NotificationConfig />
        </StoreConfig>
    );
});

export default App;
