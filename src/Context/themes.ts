import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: "#ffffff",
  color: "#000000",
};

export const darkTheme = {
  background: "#000000",
  color: "#ffffff",
};

export interface Theme {
  background: string;
  color: string;
}
