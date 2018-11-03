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

const EmCheckbox = styled('input')(
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
                backgroundColor: props.theme.color.light,
                '::after': {
                    content: '""',
                    ...[`;position: absolute;`],
                    display: 'none',
                    left: '9px',
                    top: '5px',
                    width: '5px',
                    height: '10px',
                    border: 'solid white',
                    borderWidth: '0 3px 3px 0',
                    transform: 'rotate(45deg)'
                }
            }
        };
        return css;
    }
);
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Checkbox = (props: IProps) => {

    return (
        <EmLabel theme={props.theme} >
            <EmCheckbox type="checkbox"
                theme={props.theme}
                disabled={props.disabled} />
            <span className="checkmark" />
            <span>
                {props.label}
            </span>
        </EmLabel>
    );
};

export default Checkbox;
