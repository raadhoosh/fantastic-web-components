import styled from '../../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  /** This is a primary h2 it out!. */
  primary?: boolean;
  /** This is a secondary h2 it out!. */
  secondary?: boolean;
  /** This is a success h2 it out!. */
  success?: boolean;
  /** This is a info h2 it out!. */
  info?: boolean;
  /** This is a warning h2 it out!. */
  warning?: boolean;
  /** This is a danger h2 it out!. */
  danger?: boolean;
  /** This is a light h2 it out!. */
  light?: boolean;
  /** This is a dark h2 it out!. */
  dark?: boolean;
  /** This is a text color h2 it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmH2 = styled('h2')(
  (props: (IProps)) => {
    const base_h2 = {
      fontSize: props.theme.h2.fontsize,
      color: props.color ? props.color : '#000',
      backgroundColor: 'transparent'
    };
    if (props.primary) {
      base_h2.color = props.theme.color.primary;
      return base_h2;
    }
    if (props.secondary) {
      base_h2.color = props.theme.color.secondary;
      return base_h2;
    }
    if (props.success) {
      base_h2.color = props.theme.color.success;
      return base_h2;
    }
    if (props.info) {
      base_h2.color = props.theme.color.info;
      return base_h2;
    }
    if (props.danger) {
      base_h2.color = props.theme.color.danger;
      return base_h2;
    }
    if (props.warning) {
      base_h2.color = props.theme.color.warning;
      return base_h2;
    }
    if (props.light) {
      base_h2.color = props.theme.color.light;
      base_h2.color = '#000';
      return base_h2;
    }
    if (props.dark) {
      base_h2.color = props.theme.color.dark;
      return base_h2;
    }

    base_h2.color = props.color ? props.color : '#000';
    return base_h2;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const H2 = (props: IProps) => {

  return (
    <EmH2 {...props}> {props.children} </EmH2>
  );
};

export default H2;
