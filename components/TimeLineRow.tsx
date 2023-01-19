import { Flex, FlexProps, ListItem } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { TimelineData } from "../models/TimelineData.model";
import TimeLineRowDecoration from "./TimeLineRowDecoration";

interface Props {
  children: ReactNode;
  event: TimelineData;
  isEven: boolean;
  isFirst: boolean;
  isLast: boolean;
}

const TimeLineRow: React.FC<Props> = ({
  children,
  event,
  isEven,
  isFirst,
  isLast,
}) => {
  const style: FlexProps = {
    alignItems: "center",
  };
  const oddEvenStyle: FlexProps = {
    justify: { lg: isEven ? "start" : "end" },
    direction: { lg: isEven ? "row-reverse" : "row" },
  };
  const emptyBoxStyle: FlexProps = {
    flex: { lg: 1 },
  };
  const childrenContainer: FlexProps = {
    minHeight: 12,
    // flex: { lg: 1 },
    flex: 1,
    // w: { base: "full", lg: 64 },
    direction: "column",
    align: { lg: isEven ? "end" : "start" },
  };

  return (
    <Flex as={ListItem} p={0} {...style} {...oddEvenStyle}>
      <Flex {...emptyBoxStyle} />
      <TimeLineRowDecoration
        isFirst={isFirst}
        isLast={isLast}
        color={event.color}
        logo={event.logo}
      />

      <Flex {...childrenContainer}>{children}</Flex>
    </Flex>
  );
};

export default TimeLineRow;
