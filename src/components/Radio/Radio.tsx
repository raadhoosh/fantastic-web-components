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
            'outline': 'none',
        };
        return css;
    }
);
const EmLabel = styled('label')(
    (props: (IProps)) => {
        const css = {
            'color': '#000',
            'display': 'flex',
            'align-items': 'flex-start',
            'cursor': 'pointer',
            span: {
                'padding-left': '5px'
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
        <EmLabel>
            <EmRadio type="radio"  {...props} />
            <span>
                {props.label}
            </span>
        </EmLabel>
    );
};

export default Radio;
