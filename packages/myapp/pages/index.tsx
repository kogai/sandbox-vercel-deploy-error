import React from "react";
import { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
// const publicRuntimeConfig = { greeting: "Hello" };

export const getServerSideProps = () => {
  return {
    props: {
      greeting:
        serverRuntimeConfig.greeting || "Not using next.config.js(server)",
    },
  };
};

export const Home: NextPage<InferGetServerSidePropsType<{}>> = ({
  greeting,
}) => {
  console.log(publicRuntimeConfig);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1>
          {publicRuntimeConfig.greeting || "Not using next.config.js(public)"}
        </h1>
        <h1>{greeting}</h1>
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
