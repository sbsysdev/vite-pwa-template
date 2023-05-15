// react
import { memo } from 'react';
// configs
import { LoaderConfig, RoutesConfig, StoreConfig } from './configs';

const App = memo(() => {
    return (
        <StoreConfig>
            <LoaderConfig>
                <RoutesConfig />
            </LoaderConfig>
        </StoreConfig>
    );
});

export default App;
