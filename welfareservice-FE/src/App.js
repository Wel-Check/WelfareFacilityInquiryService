import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import BasicLayout from "./styles/BasicLayout";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          여기 컴포넌트 넣어서 테스트하기
        </BasicLayout>
      </ThemeProvider>
    </>
  );
}
export default App;