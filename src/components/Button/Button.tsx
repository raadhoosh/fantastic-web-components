import * as React from 'react';
import styled from '../../common/styled';

interface IProps {
    /** This is a primary button it out!. */
    primary?: boolean;
    /** This is a secondary button it out!. */
    secondary?: boolean;
    /** This is a success button it out!. */
    success?: boolean;
    /** This is a info button it out!. */
    info?: boolean;
    /** This is a warning button it out!. */
    warning?: boolean;
    /** This is a danger button it out!. */
    danger?: boolean;
    /** This is a light button it out!. */
    light?: boolean;
    /** This is a dark button it out!. */
    dark?: boolean;
    /** This is a text color button it out! */
    children?: any;
    /** This is a Background Color button it out!. */
    backgroundColor?: string;
    /** This is a Text Color button it out!. */
    color?: string;
    /** This is a margin button it out!. */
    margin?: string;
    /** This is a noShadow button it out!. */
    noShadow?: boolean;
    theme?: any;
    size?: 'sm' | 'lg' | 'md';
}

const EmButton = styled('button')(
    (props: (IProps)) => {
        const theme = props.theme.button;
        let shadow = '';
        if (theme.shadow) {
            shadow = theme.shadow;
        }
        let padding = theme.padding;
        let fontsize = theme.fontsize;
        let  lineHeight;
        if (props.size === 'sm') {
            padding = `${props.theme.unit.padding * 8}rem ${props.theme.unit.padding * 7}rem`;
            fontsize = `${props.theme.unit.font * 8}rem`;
            lineHeight = '0.2rem';
        } else if (props.size === 'lg') {
            padding = `${props.theme.unit.padding * 14}rem ${props.theme.unit.padding * 14}rem`;
            fontsize = `${props.theme.unit.font * 11}rem`;
            lineHeight = '0.4rem';
        }
        const btn = {
            'display': 'inline-block',
            'outline': 'none',
            'text-align': 'center',
            'font-weight': 'normal',
            'white-space': 'nowrap',
            'vertical-align': 'middle',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'cursor': 'pointer',
            'user-select': 'none',
            'border': theme.border,
            'borderColor': 'transparent',
            'padding': padding,
            'font-size': fontsize,
            'line-height': lineHeight || '1.6rem',
            'border-radius': theme.radius,
            'transition': theme.transition,
            'margin': props.margin ? props.margin : theme.margin,
            'color': props.color ? props.color : theme.color,
            'backgroundColor': 'transparent'
        };
        const color = (props.primary && 'primary') ||
            (props.secondary && 'secondary') ||
            (props.success && 'success') ||
            (props.info && 'info') ||
            (props.danger && 'danger') ||
            (props.warning && 'warning') ||
            (props.light && 'light') ||
            (props.dark && 'dark') ||
            ('');
        if (color !== '') {
            btn.backgroundColor = props.theme.color[color];
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: shadow.replace('#color', props.theme.hexToRgba(props.theme.color[color]))
                };
            }
            return btn;
        }

        btn.backgroundColor = props.backgroundColor ? props.backgroundColor : props.theme.color.primary;
        if (!props.noShadow) {
            btn['&:hover'] = {
                boxShadow: shadow.replace('#color', props.theme.hexToRgba(btn.backgroundColor))
            };
        }
        return btn;
    }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Button = (props: IProps) => {

    return (
        <EmButton {...props}> {props.children} </EmButton>
    );
};

export default Button;