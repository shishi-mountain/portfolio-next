import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import Layout from "../components/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />;{" "}
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
