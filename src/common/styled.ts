import styled, { CreateStyled } from 'react-emotion';
interface Alert {
  margin: number | string,
  padding: number | string,
  fontsize: number | string,
  radius: number | string,
  border: number | string,
  color: number | string,
}
interface Badge {
  fontsize: number | string,
  borderStyle: string,
  borderSize: number | string,
  color: number | string,
  width: number | string,
  height: number | string,
  radius: number | string
}
interface Button {
  shadow: string,
  margin: number | string,
  padding: number | string,
  fontsize: number | string,
  radius: number | string,
  border: number | string,
  color: number | string,
  transition: string,
}
interface Input {
  fontsize: number | string,
  border: number | string,
}
interface Label {
  fontsize: number | string,
  borderStyle: string,
  borderSize: number | string,
  color: number | string,
}
export interface Theme {
  color: {
    primary: string;
    primary_dark: string;
    secondary: string;
    secondary_dark: string;
    warning: string;
    warning_dark: string;
    light: string;
    light_dark: string;
    dark: string;
    success: string;
    success_dark: string;
    info: string;
    info_dark: string;
    danger: string;
    danger_dark: string;
    default: string
  };
  font: {
    size: number,
    family: string,
  },
  unit: {
    padding: number,
    font: number,
    margin: number,
  },
  button: Button,
  badge: Badge,
  alert: Alert,
  input: Input,
  label: Label,
  darken(_color?: string): string,
  hexToRgba(hex: string, a?: number): string,
}

export default styled as CreateStyled<Theme>;
