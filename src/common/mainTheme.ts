import { Theme } from './styled';
import * as Color from 'color';
function darken(hex: string) {
    return Color(hex)
        .darken(0.5)
        .hex();
}
const mainTheme: Theme = {
    color: {
        primary: '#00aba9',
        primary_dark: darken('#00aba9'),
        secondary: '#0066b1',
        secondary_dark: darken('#0066b1'),
        warning: '#f0ad4e',
        warning_dark: darken('#f0ad4e'),
        light: '#f8f9fa',
        light_dark: darken('#f8f9fa'),
        dark: '#000',
        success: '#d4edda',
        success_dark: '#155724',
        info: '#5bc0de',
        info_dark: darken('#5bc0de'),
        danger: '#d9534f',
        danger_dark: darken('#d9534f'),
    },
    font: {
        size: 16,
        family: '"Roboto"',
    },
    bottom: {
        fontsize: '1rem',
        border: '5px',
    },
    darken: (_color?: string) => {
        return Color(_color)
            .darken(0.03)
            .hex();
    },
    hexToRgba: (hex: string, a: number) => {
        return Color(hex).fade(a ? a : 0.5).string();
    },
};

export default mainTheme;
