import { ThemeProvider } from '@emotion/react';
import AppThemes  from '../src/core/appThemes';
import { Theme, DEFAULT_THEME } from '../src/core/constants';
import GlobalStyles from '../src/layouts/GlobalStyles';

// @storybook/addon-toolbars
export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: DEFAULT_THEME,
        toolbar: {
            items: ['light', 'dark'],
            showName: true,
        },
    },
};

// global parameters
export const parameters = {
    layout: 'fullscreen',
};

const withThemeProvider = (Story, context) => {
    const theme = AppThemes[context.globals.theme];

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div style={{ padding: '20px' }}>
                <Story {...context} />
            </div>
        </ThemeProvider>
    );
};
export const decorators = [withThemeProvider];
