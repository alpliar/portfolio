import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
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
      <Center minH={96}>
        <Box color="primary">
          <Heading as="h1">Alexandre</Heading>
          <Text>Senior software engineer</Text>
        </Box>
      </Center>
    </>
  );
}
