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
    /** This is a Background Color button it out!. */
    backgroundColor?: string;
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
const EmCardFooter = styled('div')(
    (props: (IProps)) => {
        const base = {
            borderTop: '1px solid',
            padding: '.75rem .75rem',
            marginTop: 0,
            backgroundColor: 'transparent',
            borderRadius: 'none',
            borderTopColor: 'transparent',
            ':first-child': {
                borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0'
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
                base.borderTopColor = props.theme.color[props.borderColor];
            } else {
                base.borderTopColor = props.borderColor;
            }
        }
        return base;
    }
);
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const CardFooter = (props: IProps) => {

    return (
        <EmCardFooter {...props}> {props.children} </EmCardFooter>
    );
};
export default CardFooter;
