import styled from 'react-emotion';
import * as React from 'react';

interface IProps {
  /** 	The color of the component. It supports those theme colors that make sense for this component. */
  bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  /** 	The color of the component. It supports those theme colors that make sense for this component. */
  borderColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  /** The badge will be added relative to this node. */
  children?: any;
  /** Styles applied to the root element if color="#f0f" */
  color?: string;
  /** .It supports those theme */
  theme?: any;
}

const EmBadge = styled('span')(
  (props: (IProps)) => {
    const base_label = {
      display: 'flex',
      zIndex: 1,
      width: props.theme.badge.width,
      height: props.theme.badge.height,
      'flex-wrap': 'wrap',
      'align-items': 'center',
      'align-content': 'center',
      'border-radius': props.theme.badge.radius,
      'flex-direction': 'row',
      'justify-content': 'center',
      color: props.theme.badge.color,
      fontSize: props.theme.badge.fontSize,
      backgroundColor: props.theme.color.primary,
      border: props.theme.badge.borderSize,
      borderColor: props.theme.color.primary,
      borderStyle: props.theme.badge.borderStyle,
    };
    if (props.bgColor) {
      base_label.backgroundColor = props.theme.color[props.bgColor];
    }
    if (props.color) {
      base_label.color = props.color;
    }
    if (props.borderColor) {
      base_label.borderColor = props.theme.color[props.borderColor];
    } else {
      base_label.borderColor = 'transparent';
      base_label.border = '0';
      base_label.borderStyle = 'none';
    }
    return base_label;
  }
);

/**
 * The API documentation of the Badge React component. Learn more about the properties and the CSS customization points.
 */
const Badge = (props: IProps) => {

  return (
    <EmBadge {...props}> {props.children} </EmBadge>
  );
};

export default Badge;
