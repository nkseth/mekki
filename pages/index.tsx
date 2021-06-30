// index.tsx
import { FC } from 'react';
import Head from 'next/head';

import Banner from "../src/sections/banner"

const Home: FC = () => {
  return (
    <div  >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Banner />
    </div>
  );
};

export default Home;
