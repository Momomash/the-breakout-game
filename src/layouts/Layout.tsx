import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const LayoutDiv = styled.div((props) => ({
    background: props.theme.background,
    height: '100vh'
}));

function Layout() {
    const theme = useTheme();

    return (
        <LayoutDiv theme={theme}>
            <Outlet />
        </LayoutDiv>
    );
}

export default Layout;
