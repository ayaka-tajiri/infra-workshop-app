import {ReactElement} from "react";
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/app.scss'
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
        />
      </Head>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
