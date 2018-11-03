import styled from '../../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  /** This is a primary h4 it out!. */
  primary?: boolean;
  /** This is a secondary h4 it out!. */
  secondary?: boolean;
  /** This is a success h4 it out!. */
  success?: boolean;
  /** This is a info h4 it out!. */
  info?: boolean;
  /** This is a warning h4 it out!. */
  warning?: boolean;
  /** This is a danger h4 it out!. */
  danger?: boolean;
  /** This is a light h4 it out!. */
  light?: boolean;
  /** This is a dark h4 it out!. */
  dark?: boolean;
  /** This is a text color h4 it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmH4 = styled('h4')(
  (props: (IProps)) => {
    const base_h4 = {
      fontSize: props.theme.h4.fontsize,
      color: props.color ? props.color : '#000',
      backgroundColor: 'transparent'
    };
    if (props.primary) {
      base_h4.color = props.theme.color.primary;
      return base_h4;
    }
    if (props.secondary) {
      base_h4.color = props.theme.color.secondary;
      return base_h4;
    }
    if (props.success) {
      base_h4.color = props.theme.color.success;
      return base_h4;
    }
    if (props.info) {
      base_h4.color = props.theme.color.info;
      return base_h4;
    }
    if (props.danger) {
      base_h4.color = props.theme.color.danger;
      return base_h4;
    }
    if (props.warning) {
      base_h4.color = props.theme.color.warning;
      return base_h4;
    }
    if (props.light) {
      base_h4.color = props.theme.color.light;
      base_h4.color = '#000';
      return base_h4;
    }
    if (props.dark) {
      base_h4.color = props.theme.color.dark;
      return base_h4;
    }

    base_h4.color = props.color ? props.color : '#000';
    return base_h4;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const H4 = (props: IProps) => {

  return (
    <EmH4 {...props}> {props.children} </EmH4>
  );
};

export default H4;
