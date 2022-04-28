import React from 'react';
import { Story } from '@storybook/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import Switch, { SwitchProps } from './Switch';
import { Position } from '../../core/constants';

export default {
    title: 'Switch',
    component: Switch,
};

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: true,
    label: 'Any label',
    labelPosition: Position.LEFT,
    disabled: false,
    checkedIcon: 'en',
    icon: 'ru',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    checked: true,
    label: 'Any label',
    labelPosition: Position.LEFT,
    disabled: false,
    checkedIcon: <MdLightMode size={16} />,
    icon: <MdDarkMode size={16}/>,
};
