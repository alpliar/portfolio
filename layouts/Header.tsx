import { Flex, FlexProps, Spacer } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { start?: ReactNode; end?: ReactNode };

const Header: React.FC<Props> = ({ start, end }) => {
  const containerStyle: FlexProps = {
    width: "full",
    direction: { base: "column", lg: "row" },
    align: "center",
    gap: 5,
    wrap: "wrap",
    justify: "space-between",
  };

  return (
    <Flex {...containerStyle}>
      {start}
      {end}
    </Flex>
  );
};

export default Header;
