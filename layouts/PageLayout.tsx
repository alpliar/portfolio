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
import React, { ReactNode } from "react";
import PageHeaderEnd from "../components/PageHeaderEnd";
import PageHeaderLogo from "../components/PageHeaderLogo";
import Header from "./Header";

interface PageLayoutProps {
  children: ReactNode;
  subtitle: string;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  subtitle,
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
    padding: {
      base: 3,
      sm: 6,
      md: 16,
      xl: 24,
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
    maxW: "2xl",
    fontSize: "xl",
    // mx: { lg: 'auto'},
    color: "gray.500",
    _dark: {
      color: "gray.400",
    },
  };

  return (
    <Box as="main" {...pageStyle}>
      <Stack {...paperStyle}>
        <Header start={<PageHeaderLogo />} end={<PageHeaderEnd />} />
        <Center>
          <Divider maxW={64} />
        </Center>
        <Flex direction="column" align={{ base: "left", md: "center" }}>
          <Heading {...titleStyle}>{title}</Heading>
          <Text {...subtitleStyle}>{subtitle}</Text>
        </Flex>
        {children}
      </Stack>
    </Box>
  );
};

export default PageLayout;
