import React from 'react';
import { Story } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

export default {
    title: 'Switch',
    component: Switch,
};

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: true,
    label: 'Any label',
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: true,
    label: 'Any label',
    disabled: true,
};
