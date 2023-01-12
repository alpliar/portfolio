import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { start?: ReactNode; end?: ReactNode };

const Header: React.FC<Props> = ({ start, end }) => {
  return (
    <Flex justify="space-between" p={4}>
      <Box>{start}</Box>
      <Box>{end}</Box>
    </Flex>
  );
};

export default Header;
