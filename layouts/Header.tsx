import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Wrap,
  WrapProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { start?: ReactNode; end?: ReactNode };

const Header: React.FC<Props> = ({ start, end }) => {
  const containerStyle: FlexProps = {
    justify: "space-between",
    align: "center",
    padding: 4,
  };
  const startStyle: BoxProps = {
    color: "primary",
  };
  const endStyle: WrapProps = {
    align: "center",
    // color: "secondary",
  };

  return (
    <Flex {...containerStyle} wrap="wrap">
      <Box {...startStyle}>{start}</Box>
      <Wrap {...endStyle}>{end}</Wrap>
    </Flex>
  );
};

export default Header;
