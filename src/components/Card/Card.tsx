import styled from '../../common/styled';
import * as React from 'react';
export interface IProps {
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
    /** This is a Text Color button it out!. */
    color?: string;
    /** This is a margin button it out!. */
    margin?: string;
    radius?: string;
    bgColor?: string;
    borderColor?: string;
    /** This is a noShadow button it out!. */
    noShadow?: boolean;
    theme?: any;
    size?: 'sm' | 'lg' | 'md';
}
const EmCard = styled('div')(
    (props: (IProps)) => {
        const base = {
            width: '499px',
            border: '1px solid',
            borderRadius: '.25rem',
            borderColor: 'rgba(0,0,0,.125)',
            backgroundColor: 'transparent',
            boxShadow: '0 2px 5px 0 rgba(0,0,0,0.01), 0 2px 10px 0 rgba(0,0,0,0.15)',
            color: '#000',
            '*, ::after, ::before': {
                'box-sizing': 'border-box',
            }
        };
        if (props.radius) {
            base.borderRadius = props.radius;
        }
        if (props.bgColor) {
            if (props.theme.color[props.bgColor]) {
                base.backgroundColor = props.theme.color[props.bgColor];
            } else {
                base.backgroundColor = props.bgColor;
            }
        }
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
            base.backgroundColor = props.theme.color[color];
        }
        if (props.borderColor) {
            if (props.theme.color[props.borderColor]) {
                base.borderColor = props.theme.color[props.borderColor];
            } else {
                base.borderColor = props.borderColor;
            }
        }
        base.color = props.color ? props.color : base.color;
        return base;
    }
);
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Card = (props: IProps) => {

    return (
        <EmCard {...props}> {props.children} </EmCard>
    );
};

export default Card;