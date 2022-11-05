import CrudApi from "./components/CrudApi.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";
import { GlobalStyle } from "./GlobalStyles.js";
import { Container } from "./App.styles.js";
import Header from "./components/Header.js";
import { Credits } from "./App.styles.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <CrudApi />
      </Container>
      <Credits>
        <a
          href="https://pixelfaces.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          ✨ Pixel Faces
        </a>
      </Credits>
    </ThemeProvider>
  );
}

export default App;
