import styled from '../../common/styled';
import * as React from 'react';
import Variables from '../Variables';
/**
 *  properties
 */
interface IProps extends Variables.Color {
  children?: any;
  /** Description of prop "primary". */
  backgroundColor?: string;
  color?: string;
  margin?: string;
  theme?: any;
}

const EmLabel = styled('label')(
  (props: (IProps)) => {
    const base_label = {
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
      base_label.backgroundColor = props.theme.color.primary;
      return base_label;
    }
    if (props.secondary) {
      base_label.backgroundColor = props.theme.color.secondary;
      return base_label;
    }
    if (props.success) {
      base_label.backgroundColor = props.theme.color.success;
      return base_label;
    }
    if (props.info) {
      base_label.backgroundColor = props.theme.color.info;
      return base_label;
    }
    if (props.danger) {
      base_label.backgroundColor = props.theme.color.danger;
      return base_label;
    }
    if (props.warning) {
      base_label.backgroundColor = props.theme.color.warning;
      return base_label;
    }
    if (props.light) {
      base_label.backgroundColor = props.theme.color.light;
      base_label.color = '#000';
      return base_label;
    }
    if (props.dark) {
      base_label.backgroundColor = props.theme.color.dark;
      return base_label;
    }

    base_label.backgroundColor = props.backgroundColor ? props.backgroundColor : 'transparent';
    return base_label;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Label = (props: IProps) => {

  return (
    <EmLabel {...props}> {props.children} </EmLabel>
  );
};

export default Label;
