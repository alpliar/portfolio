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
      <Center minH="lg" p={{ base: 4, md: 16 }} w={{ base: "full" }}>
        <Stack spacing={8}>{children}</Stack>
      </Center>
    </Box>
  );
};

export default PageLayout;
