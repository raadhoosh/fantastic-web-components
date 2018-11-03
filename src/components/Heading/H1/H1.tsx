import styled from '../../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  /** This is a primary h1 it out!. */
  primary?: boolean;
  /** This is a secondary h1 it out!. */
  secondary?: boolean;
  /** This is a success h1 it out!. */
  success?: boolean;
  /** This is a info h1 it out!. */
  info?: boolean;
  /** This is a warning h1 it out!. */
  warning?: boolean;
  /** This is a danger h1 it out!. */
  danger?: boolean;
  /** This is a light h1 it out!. */
  light?: boolean;
  /** This is a dark h1 it out!. */
  dark?: boolean;
  /** This is a text color h1 it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmH1 = styled('h1')(
  (props: (IProps)) => {
    const base_h1 = {
      fontSize: props.theme.h1.fontsize,
      color: props.color ? props.color : '#000',
      backgroundColor: 'transparent'
    };
    if (props.primary) {
      base_h1.color = props.theme.color.primary;
      return base_h1;
    }
    if (props.secondary) {
      base_h1.color = props.theme.color.secondary;
      return base_h1;
    }
    if (props.success) {
      base_h1.color = props.theme.color.success;
      return base_h1;
    }
    if (props.info) {
      base_h1.color = props.theme.color.info;
      return base_h1;
    }
    if (props.danger) {
      base_h1.color = props.theme.color.danger;
      return base_h1;
    }
    if (props.warning) {
      base_h1.color = props.theme.color.warning;
      return base_h1;
    }
    if (props.light) {
      base_h1.color = props.theme.color.light;
      base_h1.color = '#000';
      return base_h1;
    }
    if (props.dark) {
      base_h1.color = props.theme.color.dark;
      return base_h1;
    }

    base_h1.color = props.color ? props.color : '#000';
    return base_h1;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const H1 = (props: IProps) => {

  return (
    <EmH1 {...props}> {props.children} </EmH1>
  );
};

export default H1;
