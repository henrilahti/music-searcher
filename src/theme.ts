// my-theme.ts
import { DefaultTheme, createGlobalStyle } from 'styled-components'

const Theme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
}


const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background-image: linear-gradient(0deg, #09203f, #537895
      95%);
    font-family: arial;
  }

`

export { Theme, GlobalStyle }