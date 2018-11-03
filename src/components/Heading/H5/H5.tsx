import styled from '../../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  /** This is a primary h5 it out!. */
  primary?: boolean;
  /** This is a secondary h5 it out!. */
  secondary?: boolean;
  /** This is a success h5 it out!. */
  success?: boolean;
  /** This is a info h5 it out!. */
  info?: boolean;
  /** This is a warning h5 it out!. */
  warning?: boolean;
  /** This is a danger h5 it out!. */
  danger?: boolean;
  /** This is a light h5 it out!. */
  light?: boolean;
  /** This is a dark h5 it out!. */
  dark?: boolean;
  /** This is a text color h5 it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmH5 = styled('h5')(
  (props: (IProps)) => {
    const base_h5 = {
      fontSize: props.theme.h5.fontsize,
      color: props.color ? props.color : '#000',
      backgroundColor: 'transparent'
    };
    if (props.primary) {
      base_h5.color = props.theme.color.primary;
      return base_h5;
    }
    if (props.secondary) {
      base_h5.color = props.theme.color.secondary;
      return base_h5;
    }
    if (props.success) {
      base_h5.color = props.theme.color.success;
      return base_h5;
    }
    if (props.info) {
      base_h5.color = props.theme.color.info;
      return base_h5;
    }
    if (props.danger) {
      base_h5.color = props.theme.color.danger;
      return base_h5;
    }
    if (props.warning) {
      base_h5.color = props.theme.color.warning;
      return base_h5;
    }
    if (props.light) {
      base_h5.color = props.theme.color.light;
      base_h5.color = '#000';
      return base_h5;
    }
    if (props.dark) {
      base_h5.color = props.theme.color.dark;
      return base_h5;
    }

    base_h5.color = props.color ? props.color : '#000';
    return base_h5;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const H5 = (props: IProps) => {

  return (
    <EmH5 {...props}> {props.children} </EmH5>
  );
};

export default H5;
