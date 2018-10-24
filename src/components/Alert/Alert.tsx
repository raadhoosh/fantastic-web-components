import styled from '../../common/styled';
import * as React from 'react';

/**
 * @description it is props for button component
 */
interface IProps {
    /** This is a primary alert it out!. */
    primary?: boolean;
    /** This is a secondary alert it out!. */
    secondary?: boolean;
    /** This is a success alert it out!. */
    success?: boolean;
    /** This is a info alert it out!. */
    info?: boolean;
    /** This is a warning alert it out!. */
    warning?: boolean;
    /** This is a danger alert it out!. */
    danger?: boolean;
    /** This is a light alert it out!. */
    light?: boolean;
    /** This is a dark alert it out!. */
    dark?: boolean;
    /** This is a text color alert it out! */
    color?: string;
    /** This is a hide alert it out! */
    hide?: boolean;
    /** This is a text alert it out! */
    children?: any;
    /** This is a theme alert */
    theme?: any
}

const EmAlert = styled('div')(
    (props: (IProps)) => {
        const base_alert = {
            'border': props.theme.alert.border,
            'border-radius': props.theme.alert.radius,
            'margin': props.theme.alert.margin,
            'padding': props.theme.alert.padding,
            'color': props.theme.alert.color,
            'backgroundColor': 'transparent'
        };
        if (props.primary) {
            base_alert.backgroundColor = props.theme.color.primary;
            base_alert.color = props.color ? props.color : props.theme.color.primary_dark;
            return base_alert;
        }
        if (props.secondary) {
            base_alert.backgroundColor = props.theme.color.secondary;
            base_alert.color = props.color ? props.color : props.theme.color.secondary_dark;
            return base_alert;
        }
        if (props.success) {
            base_alert.backgroundColor = props.theme.color.success;
            base_alert.color = props.color ? props.color : props.theme.color.success_dark;
            return base_alert;
        }
        if (props.info) {
            base_alert.backgroundColor = props.theme.color.info;
            base_alert.color = props.color ? props.color : props.theme.color.info_dark;
            return base_alert;
        }
        if (props.danger) {
            base_alert.backgroundColor = props.theme.color.danger;
            base_alert.color = props.color ? props.color : props.theme.color.danger_dark;
            return base_alert;
        }
        if (props.warning) {
            base_alert.backgroundColor = props.theme.color.warning;
            base_alert.color = props.color ? props.color : props.theme.color.warning_dark;
            return base_alert;
        }
        if (props.light) {
            base_alert.backgroundColor = props.theme.color.light;
            base_alert.color = props.color ? props.color : props.theme.color.light_dark;
            return base_alert;
        }
        if (props.dark) {
            base_alert.backgroundColor = props.theme.color.dark;
            base_alert.color = props.color ? props.color : '#fff';
            return base_alert;
        }

        base_alert.backgroundColor = props.theme.color.primary;
        base_alert.color = props.color ? props.color : base_alert.color;
        return base_alert;
    }
);
/**
 * Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 */
const Alert = (props: IProps) => {
    if (props.hide) {
        return null;
    }
    return (
        <EmAlert {...props}> {props.children} </EmAlert>
    );
};

export default Alert;
