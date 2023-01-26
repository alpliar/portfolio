import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Spacer,
  Wrap,
  WrapProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { start?: ReactNode; end?: ReactNode };

const Header: React.FC<Props> = ({ start, end }) => {
  const containerStyle: FlexProps = {
    align: "center",
    padding: 4,
    gap: 5,
  };

  return (
    <Flex {...containerStyle} wrap="wrap">
      {start}
      <Spacer />
      {end}
    </Flex>
  );
};

export default Header;
