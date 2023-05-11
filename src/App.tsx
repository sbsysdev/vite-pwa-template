// react
import { memo } from 'react';
// components
import { ReloadPrompt } from '@/components';
// styles
import './App.css';

const App = memo(() => {
    return (
        <>
            <ReloadPrompt />
        </>
    );
});

export default App;
