import styled from '../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  /** This is a primary button it out!. */
  primary?: boolean;
  /** This is a secondary button it out!. */
  secondary?: boolean;
  /** This is a success button it out!. */
  success?: boolean;
  /** This is a info button it out!. */
  info?: boolean;
  /** This is a warning button it out!. */
  warning?: boolean;
  /** This is a danger button it out!. */
  danger?: boolean;
  /** This is a light button it out!. */
  light?: boolean;
  /** This is a dark button it out!. */
  dark?: boolean;
  /** This is a text color button it out! */
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmSpan = styled('span')(
  (props: (IProps)) => {
    const base_span = {
      display: 'inline',
      padding: '.2em .6em .3em',
      fontSize: '75%',
      fontWeight: 700,
      lineHeight: 1,
      verticalAlign: 'baseline',
      borderRadius: '.25em',
      margin: props.margin ? props.margin : 2,
      color: props.color ? props.color : '#fff',
      backgroundColor: 'transparent'
    };
    if (props.primary) {
      base_span.backgroundColor = props.theme.color.primary;
      return base_span;
    }
    if (props.secondary) {
      base_span.backgroundColor = props.theme.color.secondary;
      return base_span;
    }
    if (props.success) {
      base_span.backgroundColor = props.theme.color.success;
      return base_span;
    }
    if (props.info) {
      base_span.backgroundColor = props.theme.color.info;
      return base_span;
    }
    if (props.danger) {
      base_span.backgroundColor = props.theme.color.danger;
      return base_span;
    }
    if (props.warning) {
      base_span.backgroundColor = props.theme.color.warning;
      return base_span;
    }
    if (props.light) {
      base_span.backgroundColor = props.theme.color.light;
      base_span.color = '#000';
      return base_span;
    }
    if (props.dark) {
      base_span.backgroundColor = props.theme.color.dark;
      return base_span;
    }

    base_span.backgroundColor = props.backgroundColor ? props.backgroundColor : 'transparent';
    return base_span;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Span = (props: IProps) => {

  return (
    <EmSpan {...props}> {props.children} </EmSpan>
  );
};

export default Span;
