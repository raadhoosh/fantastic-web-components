import styled from '../../common/styled';
import Variables from './../Variables';
import * as React from 'react';

/**
 * @description it is props for button component
 */
interface IProps extends Variables.Color {
    backgroundColor?: string;
    color?: string;
    margin?: string;
    hide?: boolean;
    hidden?: boolean;
    children?: any;
    theme?: any
}

const EmAlert = styled('div')(
    (props: (IProps)) => {
        if (props.hide || props.hidden) {
            return { display: 'none' };
        }
        const base_alert = {
            'padding': '.75rem 1.25rem',
            'border':  props.theme.alert.border,
            'border-radius':  props.theme.alert.radius,
            'margin': props.margin ? props.margin : 0,
            'color': props.theme.alert.color,
            'backgroundColor': 'transparent',
            '.hr': {
                'border-top': '1px solid',
                borderTopColor: 'transparent',
            },
        };
        if (props.primary) {
            base_alert.backgroundColor = props.theme.color.primary;
            base_alert.color = props.color ? props.color : props.theme.color.primary_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.primary_dark;
            return base_alert;
        }
        if (props.secondary) {
            base_alert.backgroundColor = props.theme.color.secondary;
            base_alert.color = props.color ? props.color : props.theme.color.secondary_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.secondary_dark;
            return base_alert;
        }
        if (props.success) {
            base_alert.backgroundColor = props.theme.color.success;
            base_alert.color = props.color ? props.color : props.theme.color.success_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.success_dark;
            return base_alert;
        }
        if (props.info) {
            base_alert.backgroundColor = props.theme.color.info;
            base_alert.color = props.color ? props.color : props.theme.color.info_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.info_dark;
            return base_alert;
        }
        if (props.danger) {
            base_alert.backgroundColor = props.theme.color.danger;
            base_alert.color = props.color ? props.color : props.theme.color.danger_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.primary_dark;
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
            base_alert['.hr'].borderTopColor = props.theme.color.light_dark;
            return base_alert;
        }
        if (props.dark) {
            base_alert.backgroundColor = props.theme.color.dark;
            base_alert.color = props.color ? props.color : '#fff';
            base_alert['.hr'].borderTopColor = '#fff';
            return base_alert;
        }

        base_alert.backgroundColor = props.backgroundColor ? props.backgroundColor : props.theme.color.primary;
        base_alert.color = props.color ? props.color : base_alert.color;
        base_alert['.hr'].borderTopColor = props.theme.color.primary_dark;
        return base_alert;
    }
);
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Alert = (props: IProps) => {

    return (
        <EmAlert {...props}> {props.children} </EmAlert>
    );
};

export default Alert;
