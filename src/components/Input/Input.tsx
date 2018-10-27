import styled from '../../common/styled';
import * as React from 'react';

interface IProps {
    children?: any;
    backgroundColor?: string;
    color?: string;
    margin?: string;
    small?: boolean;
    large?: boolean;
    noShadow?: boolean;
    theme?: any;
}

const EmInput = styled('input')(
    (props: (IProps)) => {
        const css = {
            'cursor': 'auto',
            'display': 'block',
            // 'width': '100%',
            'padding': '.375rem .75rem',
            'font-size': '1rem',
            'line-height': '1.5',
            'color': '#495057',
            'background-color': '#fff',
            'background-clip': 'padding-box',
            'border': `1px solid ${props.theme.color.primary}`,
            'border-radius': '.25rem',
            'transition': 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
            '&:focus': {
                'color': '#495057',
                'background-color': '#fff',
                'border-color': props.theme.color.primary,
                'outline': 0,
                'box-shadow': !props.noShadow ? `0 0 0 0.2rem ${props.theme.hexToRgba(props.theme.color.primary, 0.25)}` : 'none',
            }
        };
        if (props.small) {
            css.padding = '.25rem .5rem';
            css['font-size'] = '.875rem';
            css['line-height'] = '1.5';
            css['border-radius'] = '.2rem';
        }
        if (props.large) {
            css.padding = '.5rem 1rem';
            css['font-size'] = '1.25rem';
            css['line-height'] = '1.5';
            css['border-radius'] = '.3rem';
        }
        return css;
    }
);
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Input = (props: IProps) => {

    return (
        <EmInput {...props}/>
    );
};

export default Input;
