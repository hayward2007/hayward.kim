import type { AppProps } from "next/app";
import "../styles/global.css";
import "../assets/fonts/SUIT/SUIT.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>HAYWARD_KIM</title>
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default App;