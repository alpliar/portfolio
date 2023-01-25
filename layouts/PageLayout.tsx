import { Box, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const PageLayout: React.FC<Props> = ({ children }) => {
  const childrenContainerStyle = {
    padding: {
      base: 2,
      lg: 8,
      md: 4,
    },
    marginTop: 8,
    spacing: 8,
    transition: "all ease-in-out 0.2s",
  };
  return (
    <Box as="main" marginBottom={16}>
      {/* <Header start={<PageHeaderLogo />} end={<PageHeaderEnd />} /> */}
      <Stack {...childrenContainerStyle}>{children}</Stack>
    </Box>
  );
};

export default PageLayout;
