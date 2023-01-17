import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Timeline from "../components/Timeline";
import HomepageLayout from "../layouts/HomepageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Alexandre's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomepageLayout>
          <Box bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
            <Heading as="h1">Alexandre</Heading>
            <Text>Senior software engineer</Text>
          </Box>
          <Timeline />
        </HomepageLayout>
      </main>
    </>
  );
}
