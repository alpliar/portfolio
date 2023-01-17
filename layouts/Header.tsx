import { Box, Flex, Wrap } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { start?: ReactNode; end?: ReactNode };

const Header: React.FC<Props> = ({ start, end }) => {
  return (
    <Flex justify="space-between" p={4}>
      <Box>{start}</Box>
      <Wrap align="center">{end}</Wrap>
    </Flex>
  );
};

export default Header;
