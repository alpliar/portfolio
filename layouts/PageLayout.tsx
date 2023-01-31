import {
  Box,
  BoxProps,
  Center,
  Divider,
  Flex,
  Heading,
  HeadingProps,
  Stack,
  StackProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";
import PageHeaderEnd from "../components/PageHeaderEnd";
import PageHeaderLogo from "../components/PageHeaderLogo";
import Header from "./Header";

interface PageLayoutProps {
  children: ReactNode;
  subtitle: string;
  tabName?: string;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  subtitle,
  tabName = "",
  title,
}) => {
  const pageStyle: BoxProps = {
    paddingY: 1,
    paddingX: { base: 1, sm: 2, md: 6 },
  };
  const paperStyle: StackProps = {
    bgColor: "chakra-card-bg",
    rounded: "xl",
    w: "full",
    maxW: "7xl",
    margin: "auto",
    align: "center",
    paddingY: {
      base: 8,
      md: 12,
      xl: 16,
    },
    paddingX: {
      base: 4,
      sm: 8,
      md: 12,
      xl: 16,
    },
    marginY: 8,
    transition: "all ease-in-out 0.2s",
    spacing: 8,
  };

  const titleStyle: HeadingProps = {
    as: "h1",
    mt: 2,
    fontSize: { base: "3xl", sm: "4xl" },
    lineHeight: 8,
    fontWeight: "extrabold",
    letterSpacing: "tight",
    color: "primary",
  };

  const subtitleStyle: TextProps = {
    mt: 4,
    paddingX: 8,
    maxW: "xl",
    fontSize: "xl",
    color: "discrete",
  };

  return (
    <>
      <Head>
        <title>{`Alexandre's ${tabName || title.toLocaleLowerCase()}`}</title>
        <meta name="description" content="Alexandre's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" {...pageStyle}>
        <Stack {...paperStyle}>
          <Header start={<PageHeaderLogo />} end={<PageHeaderEnd />} />
          <Center>
            <Divider w={64} borderWidth={1} borderColor="currentColor" />
          </Center>
          <Flex direction="column" align="center" gap={4}>
            <Heading {...titleStyle}>{title}</Heading>
            <Text {...subtitleStyle}>{subtitle}</Text>
          </Flex>
          {children}
        </Stack>
      </Box>
    </>
  );
};

export default PageLayout;
