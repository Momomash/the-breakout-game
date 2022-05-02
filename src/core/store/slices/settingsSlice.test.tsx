import { Language, Theme } from '@/core/constants';

import { actions, reducer, SettingsState } from './settingsSlice';

describe('SettingsSlice', () => {
    const state: SettingsState = {
        theme: Theme.LIGHT,
        lang: Language.EN,
    };

    it('should handle setTheme action', () => {
        const newTheme = Theme.DARK
        expect(reducer(state, actions.setTheme(newTheme))).toEqual({
            ...state,
            theme: newTheme,
        });
    });

    it('should handle setLang action', () => {
        const newLang = Language.RU
        expect(reducer(state, actions.setLang(newLang))).toEqual({
            ...state,
            lang: newLang,
        });
    });
});
