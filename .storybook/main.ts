import { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-controls',
        '@storybook/addon-docs',
        '@storybook/addon-toolbars'
    ],
};
module.exports = config;
