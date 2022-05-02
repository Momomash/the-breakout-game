import '@emotion/react';
import { Theme as ThemeType } from '@/core/appThemes';

declare module '@emotion/react' {
    // eslint-disable-next-line
    export interface Theme extends ThemeType {}
}
