import styled from '../../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  /** This is a primary h3 it out!. */
  primary?: boolean;
  /** This is a secondary h3 it out!. */
  secondary?: boolean;
  /** This is a success h3 it out!. */
  success?: boolean;
  /** This is a info h3 it out!. */
  info?: boolean;
  /** This is a warning h3 it out!. */
  warning?: boolean;
  /** This is a danger h3 it out!. */
  danger?: boolean;
  /** This is a light h3 it out!. */
  light?: boolean;
  /** This is a dark h3 it out!. */
  dark?: boolean;
  /** This is a text color h3 it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmH3 = styled('h3')(
  (props: (IProps)) => {
    const base_h3 = {
      fontSize: props.theme.h3.fontsize,
      color: props.color ? props.color : '#000',
      backgroundColor: 'transparent'
    };
    if (props.primary) {
      base_h3.color = props.theme.color.primary;
      return base_h3;
    }
    if (props.secondary) {
      base_h3.color = props.theme.color.secondary;
      return base_h3;
    }
    if (props.success) {
      base_h3.color = props.theme.color.success;
      return base_h3;
    }
    if (props.info) {
      base_h3.color = props.theme.color.info;
      return base_h3;
    }
    if (props.danger) {
      base_h3.color = props.theme.color.danger;
      return base_h3;
    }
    if (props.warning) {
      base_h3.color = props.theme.color.warning;
      return base_h3;
    }
    if (props.light) {
      base_h3.color = props.theme.color.light;
      base_h3.color = '#000';
      return base_h3;
    }
    if (props.dark) {
      base_h3.color = props.theme.color.dark;
      return base_h3;
    }

    base_h3.color = props.color ? props.color : '#000';
    return base_h3;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const H3 = (props: IProps) => {

  return (
    <EmH3 {...props}> {props.children} </EmH3>
  );
};

export default H3;
