import { Box, Center, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import PageHeaderEnd from "../components/PageHeaderEnd";
import PageHeaderLogo from "../components/PageHeaderLogo";
import Header from "./Header";

type Props = { children: ReactNode };

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box as="main">
      <Header start={<PageHeaderLogo />} end={<PageHeaderEnd />} />
      <Stack
        transition="all 0.5s"
        // p={{ base: 2, md: 4, lg: 8 }}
        spacing={8}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default PageLayout;
