import React from 'react';

import { act } from 'react-dom/test-utils';

import { render, screen } from '@/core/test-utils';

import Switch from './Switch';

describe('render label', () => {
    const label = 'Any label';
    it('with label', () => {
        act(() => {
            render(
                <Switch checked checkedIcon="yes" icon="no" onClick={jest.fn()} label={label} />,
            );
        });
        expect(screen.getByText(label)).toBeTruthy();
    });
    it('without label', () => {
        act(() => {
            render(<Switch checked checkedIcon="yes" icon="no" onClick={jest.fn()} />);
        });
        expect(screen.queryByText(label, { exact: false })).toBeNull();
    });
});

describe('disabled button', () => {
    it('with disabled attribute when prop.disabled=== true', () => {
        act(() => {
            render(<Switch checked disabled checkedIcon="yes" icon="no" onClick={jest.fn()} />);
        });
        const button = screen.getByRole('button');
        expect(button.getAttributeNames().includes('disabled')).toBe(true);
    });
});
