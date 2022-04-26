import { Theme } from './constants';

const appThemes = {
    [Theme.LIGHT]: {
        name: Theme.LIGHT,
        colors: {
            blue: '#012c3d',
            red: '#f8444f',
            gray: '#dedede',
            lightblue: '#78bdc4',
        },
        background: '#dedede',
        color: '#012c3d',
    },
    [Theme.DARK]: {
        name: Theme.DARK,
        colors: {
            blue: '#455d79',
            red: '#f8444f',
            gray: '#f7f8f3',
            lightblue: '#4a9abb',
        },
        background: '#455d79',
        color: '#f7f8f3',
    },
};

export default appThemes;
