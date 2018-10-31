import styled from '../../common/styled';
import * as React from 'react';
import imgSrc from './img_avatar3.png';

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
const EmCardBodyImg = styled('div')(
    (props: (IProps)) => {
        const base = {
            width: '200px',
            padding: '0',
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
const CardBodyImg = (props: IProps) => {

    return (
        <EmCardBodyImg {...props}>
        <img src={imgSrc}/>
        </EmCardBodyImg>
    );
};

export default CardBodyImg;
