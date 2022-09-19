import { ThemeProvider } from "styled-components";
import { Transactions } from "./Pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}

