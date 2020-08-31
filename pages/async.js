import Head from "next/head";

import { styled } from "@material-ui/styles";
import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";

const MarginButton = styled(Button)({
  marginTop: "0.5em",
});

export default function AsyncCounter() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Async Next Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Page is empty for now</h1>
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