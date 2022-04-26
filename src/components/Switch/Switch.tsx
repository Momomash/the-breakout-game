import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Wrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}));

const ToggleButton = styled.button(({ theme }) => ({
    width: '30px',
    height: '10px',
    borderRadius: '10px',
    marginRight: '5px',
    border: 'none',
    backgroundColor: theme.colors.gray,
    '&:not(:disabled)': {
        cursor: 'pointer',
    },
}));

export interface SwitchProps extends React.ComponentPropsWithoutRef<'button'> {
    checked: boolean;
    label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, label = '', ...forwardingProps }) => {
    const theme = useTheme();

    return (
        <Wrapper>
            <ToggleButton
                className="Toggle"
                type="button"
                aria-pressed={checked}
                theme={theme}
                {...forwardingProps}
            >
                <span className="Toggle__display" hidden>
                    <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        className="Toggle__icon Toggle__icon--checkmark"
                    >
                        <path
                            d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z"
                            fill="currentcolor"
                            stroke="currentcolor"
                        />
                    </svg>
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        className="Toggle__icon Toggle__icon--cross"
                    >
                        <path
                            d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z"
                            fill="currentcolor"
                        />
                    </svg>
                </span>
            </ToggleButton>
            {label}
        </Wrapper>
    );
};

export default Switch;
