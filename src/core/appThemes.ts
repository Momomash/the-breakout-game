import { Theme as ThemeType } from './constants';

export type Theme =  {
    name: string;
    colors: {
        [key: string]: string;
    };
    background: string;
    color: string;
}

const appThemes: { [key: string]: Theme } = {
    [ThemeType.LIGHT]: {
        name: ThemeType.LIGHT,
        colors: {
            blue: '#012c3d',
            lightblue: '#0b445d',
            red: '#f8444f',
            lightred: '#f36b74',
            gray: '#e6e4e0',
            lightgray: '#f9f8f6',
            yellow: '#d7dd27',
            green: '#34b855',
            orange: '#da9516',
        },
        background: '#f9f8f6',
        color: '#012c3d',
    },
    [ThemeType.DARK]: {
        name: ThemeType.DARK,
        colors: {
            blue: '#193e56',
            lightblue: '#294e6a',
            red: '#f95961',
            lightred: '#f47d83',
            gray: '#e9e6e3',
            lightgray: '#faf9f7',
            yellow: '#dd8d3e',
            green: '#5fad5c',
            orange: '#e98724',
        },
        background: '#294e6a',
        color: '#faf9f7',
    },
};

export default appThemes;
