import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from '@emotion/react';
import { persistor, Store } from 'core/store';
import appThemes from './core/appThemes';

import Router from './core/router/Router';

function App() {
    const { theme } = useSelector((state: Store) => state.settings);
    const checkedTheme = appThemes[theme];

    return (
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <ThemeProvider theme={checkedTheme}>
                    <Router />
                </ThemeProvider>
            </BrowserRouter>
        </PersistGate>
    );
}

export default App;
