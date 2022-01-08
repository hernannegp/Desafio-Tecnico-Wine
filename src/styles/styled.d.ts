import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      quaternary: string,
      buttonColor: string,

      textPrimary: string,
      textSecondary: string,
      textWhite: string,

      backgroundPrimary: string
    }
  }
}
