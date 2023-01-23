import { Box, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import PageHeaderEnd from "../components/PageHeaderEnd";
import PageHeaderLogo from "../components/PageHeaderLogo";
import Header from "./Header";

type Props = { children: ReactNode };

const PageLayout: React.FC<Props> = ({ children }) => {
  const childrenContainerStyle = {
    padding: {
      base: 2,
      lg: 8,
      md: 4,
    },
    spacing: 8,
    transition: "all 1s",
  };
  return (
    <Box as="main">
      <Header start={<PageHeaderLogo />} end={<PageHeaderEnd />} />
      <Stack {...childrenContainerStyle}>{children}</Stack>
    </Box>
  );
};

export default PageLayout;
