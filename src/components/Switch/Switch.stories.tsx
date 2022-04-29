import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { Position } from '../../core/constants';

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
    labelPosition: Position.LEFT,
    disabled: false,
    checkedIcon: 'en',
    icon: 'ru',
    onClick: action('onChange')
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    checked: true,
    label: 'Any label',
    labelPosition: Position.LEFT,
    disabled: false,
    checkedIcon: <MdLightMode size={16} />,
    icon: <MdDarkMode size={16}/>,
    onClick: action('onChange')
};
