import React from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Switch } from '@/components';
import { Theme, DEFAULT_THEME } from '@/core/constants';
import { Store, SettingsActions } from '@/core/store';

import GlobalStyles from './GlobalStyles';

const LayoutDiv = styled.div`
    height: 100vh;
    position: relative;
`;

const Container = styled.div`
    max-width: 1170px;
    margin: auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
`;

function Layout({ theme: themeKey, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
    const theme = useTheme();
    const isChecked = themeKey === DEFAULT_THEME;

    const handleChangeTheme = () => {
        setTheme(isChecked ? Theme.DARK : Theme.LIGHT);
    };

    return (
        <LayoutDiv theme={theme}>
            <Header>
                <Switch
                    checked={isChecked}
                    checkedIcon={<MdLightMode size={16} />}
                    icon={<MdDarkMode size={16} />}
                    onClick={handleChangeTheme}
                />
            </Header>
            <GlobalStyles />
            <Container>
                <Outlet />
            </Container>
        </LayoutDiv>
    );
}

const mapStateToProps = (store: Store) => ({
    theme: store.settings.theme,
});

const mapDispatchToProps = {
    setTheme: SettingsActions.setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
