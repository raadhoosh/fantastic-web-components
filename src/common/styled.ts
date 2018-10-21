import styled, { CreateStyled } from 'react-emotion';

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
  };
  font: {
    size: number,
    family: string,
  },
  darken(_color?: string): string,
  hexToRgba(hex: string, a?: number): string,
}

export default styled as CreateStyled<Theme>;
