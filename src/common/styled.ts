import styled, { CreateStyled } from 'react-emotion';
import H3 from 'src/components/Heading/H3/H3';
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
interface Card {
  width: number | string,
}
interface TextArea {
  fontsize: number | string,
  width: number | string,
  height: number | string,
}
interface Label {
  fontsize: number | string,
  borderStyle: string,
  borderSize: number | string,
  color: number | string,
}
interface H1 {
  fontsize: string | number,
  color: number | string
}
interface H2 {
  fontsize: string | number,
  color: number | string
}
interface H3 {
  fontsize: string | number,
  color: number | string
}
interface H4 {
  fontsize: string | number,
  color: number | string
}
interface H5 {
  fontsize: string | number,
  color: number | string
}
interface H6 {
  fontsize: string | number,
  color: number | string
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
  textarea: TextArea,
  label: Label,
  card: Card,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  darken(_color?: string): string,
  hexToRgba(hex: string, a?: number): string,
}

export default styled as CreateStyled<Theme>;
