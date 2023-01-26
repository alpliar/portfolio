import { Flex, FlexProps, Spacer } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { start?: ReactNode; end?: ReactNode };

const Header: React.FC<Props> = ({ start, end }) => {
  const containerStyle: FlexProps = {
    align: "center",
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
