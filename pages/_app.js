import React from 'react';
import { Toaster } from 'react-hot-toast';
import { StateContext } from 'Context/StateContext';

import '../styles/globals.css';
import { Layout } from '../components';


export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
