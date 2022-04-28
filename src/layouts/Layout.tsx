import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import GlobalStyles from './GlobalStyles';

const LayoutDiv = styled.div`
    height: 100vh;
`;

function Layout() {
    const theme = useTheme();

    return (
        <LayoutDiv theme={theme}>
            <GlobalStyles />
            <Outlet />
        </LayoutDiv>
    );
}

export default Layout;
