import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { connect } from 'react-redux';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Switch } from 'components';
import { Store, SettingsActions } from 'core/store';
import { Theme, DEFAULT_THEME } from 'core/constants';

import GlobalStyles from './GlobalStyles';

const LayoutDiv = styled.div`
    height: 100vh;
    position: relative;
`;

function Layout({ theme: themeKey, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
    const theme = useTheme();
    const isChecked = themeKey === DEFAULT_THEME;

    const handleChangeTheme = () => {
        setTheme(isChecked ? Theme.DARK : Theme.LIGHT);
    };

    return (
        <LayoutDiv theme={theme}>
            <Switch
                checked={isChecked}
                checkedIcon={<MdLightMode size={16} />}
                icon={<MdDarkMode size={16} />}
                onClick={handleChangeTheme}
            />
            <GlobalStyles />
            <Outlet />
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
