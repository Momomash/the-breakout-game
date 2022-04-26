import { ThemeProvider } from '@emotion/react';
import AppThemes from '../src/core/appThemes';

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            items: ['light', 'dark'],
            showName: true,
        },
    },
};

const withThemeProvider = (Story, context) => {
    const theme = AppThemes[context.globals.theme];
    return (
        <ThemeProvider theme={theme}>
            <Story {...context} />
        </ThemeProvider>
    );
};
export const decorators = [withThemeProvider];
