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
    id?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
}

const EmRadio = styled('input')(
    (props: (IProps)) => {
        const css = {
            outline: 'none',
            ...[`;position: absolute;`],
            opacity: '0',
            cursor: 'pointer',
            height: '0',
            width: '0',
            ':checked ~ .checkmark': {
                backgroundColor: props.theme.color.primary,
                ':after': {
                    display: 'block'
                }
            }
        };
        return css;
    }
);
const EmLabel = styled('label')(
    (props: (IProps)) => {
        const css = {
            color: '#000',
            display: 'flex',
            alignItems: 'flex-start',
            cursor: 'pointer',
            paddingLeft: '35px',
            marginBottom: '12px',
            ...[`;position: relative;`],
            '.checkmark': {
                ...[`;position: absolute;`],
                top: '0',
                left: '0',
                height: '25px',
                width: '25px',
                borderRadius: '50%',
                backgroundColor: props.theme.color.light,
                '::after': {
                    content: '""',
                    ...[`;position: absolute;`],
                    display: 'none',
                    left: '9px',
                    top: '9px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%'
                }
            }
        };
        return css;
    }
);
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Radio = (props: IProps) => {

    return (
        <EmLabel theme={props.theme} >
            <EmRadio type="radio"
                theme={props.theme}
                disabled={props.disabled}
                name={props.name}
            />
            <span className="checkmark" />
            <span>
                {props.label}
            </span>
        </EmLabel>
    );
};

export default Radio;
