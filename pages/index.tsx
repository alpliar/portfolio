import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Features from "../layouts/Features";
import PageLayout from "../layouts/PageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Alexandre's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features title="Alexandre" subtitle="Senior software engineer">
        <></>
      </Features>
    </>
  );
}
