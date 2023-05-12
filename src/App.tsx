// react
import { memo } from 'react';
// configs
import { LoaderConfig, StoreConfig } from './configs';

const App = memo(() => {
    return (
        <StoreConfig>
            <LoaderConfig>
                <>App</>
            </LoaderConfig>
        </StoreConfig>
    );
});

export default App;
