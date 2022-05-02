import React from 'react';

import { Global, useTheme } from '@emotion/react';

function GlobalStyles() {
    const theme = useTheme();

    return (
        <Global
            styles={{
                body: {
                    fontFamily: '"Press Start 2P", cursive',
                    color: theme.color,
                    background: theme.background
                },
            }}
        />
    );
}

export default GlobalStyles;
