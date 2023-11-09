import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import BasicLayout from "./styles/BasicLayout";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          <Router />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;