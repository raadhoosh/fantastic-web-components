import styled from '../../common/styled';
import * as React from 'react';
export interface IProps {
    /** This is a text color button it out! */
    children?: any;
    /** This is a Background Color button it out!. */
    backgroundColor?: string;
    /** This is a Text Color button it out!. */
    color?: string;
    /** This is a margin button it out!. */
    margin?: string;
    radius?: string;
    bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
    borderColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
    /** This is a noShadow button it out!. */
    noShadow?: boolean;
    theme?: any;
    size?: 'sm' | 'lg' | 'md';
}
const EmCardBody = styled('div')(
    (props: (IProps)) => {
        const base = {
            flex: '1 1 auto',
            padding: '.75rem .75rem',
            '*, ::after, ::before': {
                'box-sizing': 'border-box',
            }
        };
        return base;
    }
);
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const CardBody = (props: IProps) => {

    return (
        <EmCardBody {...props}> {props.children} </EmCardBody>
    );
};

export default CardBody;
