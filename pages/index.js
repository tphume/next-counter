import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../redux/counter";

import { styled } from "@material-ui/styles";
import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";

const MarginButton = styled(Button)({
  marginTop: "0.5em",
});

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Counter Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{count}</h1>
        <MarginButton
          color="primary"
          variant="contained"
          onClick={() => dispatch(counterActions.increment())}
        >
          INCREASE
        </MarginButton>
        <MarginButton
          color="secondary"
          variant="outlined"
          onClick={() => dispatch(counterActions.decrement())}
        >
          DECREASE
        </MarginButton>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
