import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@fluentui/react'

const theme = createTheme({
  palette: {
    themePrimary: '#005479',
    themeLighterAlt: '#f0f7fa',
    themeLighter: '#c4dee9',
    themeLight: '#96c3d6',
    themeTertiary: '#468fae',
    themeSecondary: '#106488',
    themeDarkAlt: '#004c6c',
    themeDark: '#00405b',
    themeDarker: '#002f43',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  }});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp
