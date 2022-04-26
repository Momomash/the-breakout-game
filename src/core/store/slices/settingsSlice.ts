import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, Theme } from '../../constants';

export type SettingsState = {
    theme: Theme;
    lang: Language;
};
const initialState: SettingsState = {
    theme: Theme.BLACK,
    lang: Language.EN,
};

export const SettingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme: (state, { payload }: PayloadAction<Theme>) => {
            state.theme = payload;
        },
        setLang: (state, { payload }: PayloadAction<Language>) => {
            state.lang = payload;
        },
    },
});

export const { reducer, actions } = SettingsSlice;
