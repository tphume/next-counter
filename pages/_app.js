import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import wrapper from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next.js Counter</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <PersistGate persistor={store.__persistor}>
        <Component {...pageProps} />;
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
