import styled from '../../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  /** This is a primary h6 it out!. */
  primary?: boolean;
  /** This is a secondary h6 it out!. */
  secondary?: boolean;
  /** This is a success h6 it out!. */
  success?: boolean;
  /** This is a info h6 it out!. */
  info?: boolean;
  /** This is a warning h6 it out!. */
  warning?: boolean;
  /** This is a danger h6 it out!. */
  danger?: boolean;
  /** This is a light h6 it out!. */
  light?: boolean;
  /** This is a dark h6 it out!. */
  dark?: boolean;
  /** This is a text color h6 it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmH6 = styled('h6')(
  (props: (IProps)) => {
    const base_h6 = {
      fontSize: props.theme.h6.fontsize,
      color: props.color ? props.color : '#000',
      backgroundColor: 'transparent'
    };
    if (props.primary) {
      base_h6.color = props.theme.color.primary;
      return base_h6;
    }
    if (props.secondary) {
      base_h6.color = props.theme.color.secondary;
      return base_h6;
    }
    if (props.success) {
      base_h6.color = props.theme.color.success;
      return base_h6;
    }
    if (props.info) {
      base_h6.color = props.theme.color.info;
      return base_h6;
    }
    if (props.danger) {
      base_h6.color = props.theme.color.danger;
      return base_h6;
    }
    if (props.warning) {
      base_h6.color = props.theme.color.warning;
      return base_h6;
    }
    if (props.light) {
      base_h6.color = props.theme.color.light;
      base_h6.color = '#000';
      return base_h6;
    }
    if (props.dark) {
      base_h6.color = props.theme.color.dark;
      return base_h6;
    }

    base_h6.color = props.color ? props.color : '#000';
    return base_h6;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const H6 = (props: IProps) => {

  return (
    <EmH6 {...props}> {props.children} </EmH6>
  );
};

export default H6;
