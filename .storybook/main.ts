import { StorybookConfig } from '@storybook/core-common';
const path = require('path');

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-toolbars',
    ],
    webpackFinal: async (config: any ) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, "../src/"),
        };
        return config;
    }
};
module.exports = config;
