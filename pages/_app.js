import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import wrapper from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return (
    <PersistGate persistor={store.__persistor}>
      <Component {...pageProps} />;
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
