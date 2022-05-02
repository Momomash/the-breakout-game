import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { Position } from '@/core/constants';

const HEIGHT = 26;
const BORDER = 2;
const MARGIN = 16;
const CONTROL_SIZE = HEIGHT - BORDER - BORDER;

type PositionType = Position.RIGHT | Position.LEFT;

const Wrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}));

const ToggleButton = styled.button(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60px',
    height: `${HEIGHT}px`,
    borderRadius: `${HEIGHT / 2}px`,
    background: theme.colors.red,
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '9px',
    '&:disabled': {
        cursor: 'default',
        background: theme.colors.lightred,
    },
    '&[aria-pressed="true"]:after': {
        left: `calc(100% - ${HEIGHT}px)`,
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        zIndex: 2,
        transition: 'all 0.3s ease-in',
        left: `${BORDER}px`,
        top: `${BORDER}px`,
        width: `${CONTROL_SIZE}px`,
        height: `${CONTROL_SIZE}px`,
        borderRadius: '50%',
        background: theme.colors.lightgray,
    },
}));

const Label = styled.span(({ position }: { position: PositionType }) => ({
    fontSize: '16px',
    order: position === Position.RIGHT ? 'inherit' : '-1',
    marginRight: position === Position.LEFT ? `${MARGIN}px` : 0,
    marginLeft: position === Position.RIGHT ? `${MARGIN}px` : 0,
}));

export interface SwitchProps extends React.ComponentPropsWithoutRef<'button'> {
    checked: boolean;
    label?: string;
    labelPosition?: PositionType;
    checkedIcon: string | ReactNode;
    icon: string | ReactNode;
    onClick: () => void;
}

const Switch: React.FC<SwitchProps> = ({
    checked,
    label = '',
    labelPosition = Position.RIGHT,
    checkedIcon,
    icon,
    onClick,
    ...forwardingProps
}) => {
    const theme = useTheme();

    return (
        <Wrapper>
            <ToggleButton
                type="button"
                aria-pressed={checked}
                theme={theme}
                role="button"
                onClick={() => onClick()}
                {...forwardingProps}
            >
                <span>{checkedIcon}</span>
                <span>{icon}</span>
            </ToggleButton>
            {label && (
                <Label position={labelPosition} theme={theme}>
                    {label}
                </Label>
            )}
        </Wrapper>
    );
};

export default Switch;
