import React from "react";
import { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const Home: NextPage<InferGetServerSidePropsType<{}>> = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1>{publicRuntimeConfig.greeting || "Not using next.config.js"}</h1>
      </main>

      <style jsx>{`
        main {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Home;
