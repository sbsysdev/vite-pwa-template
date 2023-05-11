// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { registerSW } from 'virtual:pwa-register';
// app
import App from '@/App.tsx';
// components
// import { ReloadPrompt } from '@/components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/* const updateSW =  registerSW({
    onNeedRefresh() {
        <ReloadPrompt />;
    },
    onOfflineReady() {
        <ReloadPrompt />;
    },
    onRegisterError() {
        // TODO: updateSW(true);
    },
}); */
