import { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-toolbars',
    ],
};
module.exports = config;
