import React from 'react';
import { NextPage, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

export const Home: NextPage<InferGetServerSidePropsType<{}>> = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>Hello!</main>

      <style jsx>{`
        main {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Home;
