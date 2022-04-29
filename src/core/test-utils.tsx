import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { createStore } from './store';
import appThemes from './appThemes';
import { DEFAULT_THEME } from './constants';

function render(component: ReactElement, ...renderOptions: never[]) {
    function Wrapper({ children }: { children: ReactElement }) {
        const checkedTheme = appThemes[DEFAULT_THEME];
        const store = createStore();
        return (
            <Provider store={store}>
                <ThemeProvider theme={checkedTheme}>{children}</ThemeProvider>
            </Provider>
        );
    }
    return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
