import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { increment, decrement } from '../redux/asyncCounter';

import styles from '../styles/Home.module.css';

const MarginButton = styled(Button)({
  marginTop: '0.5em',
});

export default function AsyncCounter() {
  const dispatch = useDispatch();
  const { count, loading } = useSelector((state) => state.asyncCounter);

  return (
    <div className={styles.container}>
      <Head>
        <title>Async Next Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{`Async Counter - ${count}`}</h1>
        <MarginButton
          color="primary"
          variant="contained"
          onClick={() => dispatch(increment())}
          disabled={loading}
        >
          INCREASE
        </MarginButton>
        <MarginButton
          color="secondary"
          variant="outlined"
          onClick={() => dispatch(decrement())}
          disabled={loading}
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
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
