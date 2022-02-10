import { ThemeProvider } from "styled-components";
import { Header, Footer } from "../src/components"
import GlobalStyle from "../styles/global";
import { AnimatePresence } from 'framer-motion'

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps, router}) {
  const url = `https://localhost${router.route}`
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={url} />
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
}
