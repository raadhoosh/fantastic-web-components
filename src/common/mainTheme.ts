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
        success: '#4cae4c',
        success_dark: '#155724',
        info: '#5bc0de',
        info_dark: darken('#5bc0de'),
        danger: '#d9534f',
        danger_dark: darken('#d9534f'),
        default: '#6c757d'
    },
    font: {
        size: 16,
        family: '"Roboto"',
    },
    unit: {
        padding: .1,
        font: .1,
        margin: .1,
    },
    button: {
        margin: '5px 3px',
        padding: '.375rem .75rem',
        radius: '5%',
        fontsize: '1rem',
        color: '#fff',
        border: '5px',
        shadow: '0 0 0 0.2rem #color',
        transition: `color .15s ease-in-out,
        background-color.15s ease-in-out,
        border-color .15s ease-in-out,
        box-shadow .25s ease-in-out`
    },
    alert: {
        margin: '5px 0px',
        padding: '.75rem 1.25rem',
        fontsize: '12',
        radius: '5px',
        border: '1px solid transparent',
        color: '#fff',
    },
    input: {
        fontsize: '12',
        border: '1px solid',
    },
    textarea: {
        fontsize: '12',
        width: 'auto',
        height: '50px',
    },
    label: {
        fontsize: '12',
        borderStyle: 'solid',
        borderSize: 0,
        color: '#fff',
    },
    badge: {
        fontsize: '.756rem',
        borderStyle: 'solid',
        borderSize: '1px',
        color: '#fff',
        width: 'auto',
        height: 'auto',
        radius: '10px',
    },
    h1: {
        fontsize: '2em',
        color: '#000'
    },
    h2: {
        fontsize: '1.5em',
        color: '#000'
    },
    h3: {
        fontsize: '1.17em',
        color: '#000'
    },
    h4: {
        fontsize: '1.33em',
        color: '#000'
    },
    h5: {
        fontsize: '0.83em',
        color: '#000'
    },
    h6: {
        fontsize: '0.67em',
        color: '#000'
    },
    card: {
      width: '499px'
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
