import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {

  --color-primary: ${({ theme }) => theme.primary};
  --color-secondary:${({ theme }) => theme.secondary};
  --background:${({ theme }) => theme.background};
  --text-color: ${({ theme }) => theme.text};
  
  /* font size */
  --font-size-sm:0.75rem;
  --font-size-md:1.5rem;
  --font-size-lg:2rem;
}
body{
margin:0;
padding:0;
background-color: var(--background);
color:var(--text-color);
}
`;

export const lightTheme = {
  primary: "#4a90e2",
  secondary: "#20c997",
  background: "#f9f9f9",
  text: "#000",
};

export const darkTheme = {
  primary: "#9b59b6",
  secondary: "#1abc9c",
  background: "#1a1a1a",
  text: "#ffffff",
};
export type ThemeType = typeof lightTheme;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}