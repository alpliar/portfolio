import {
  Flex,
  FlexProps,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { TimelineData } from "../models/TimelineData.model";
import TimeLineRowDecoration from "./TimeLineRowDecoration";

interface Props {
  children: ReactNode;
  event: TimelineData;
  isEven: boolean;
  isFirst: boolean;
  isLast: boolean;
  isNested?: boolean;
}

const TimeLineRow: React.FC<Props> = ({
  children,
  event,
  isEven,
  isFirst,
  isLast,
  isNested = false,
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
    // align: { lg: isEven ? "end" : "start" },
    justify: { lg: isEven ? "end" : "start" },
  };
  // const showChildrenDecoration: boolean = useBreakpointValue({
  //   base: false,
  //   lg: true,
  // });

  return (
    <Flex as={ListItem} p={0} {...style} {...oddEvenStyle}>
      <Flex {...emptyBoxStyle} />

      <TimeLineRowDecoration
        isEven={isEven}
        isFirst={isFirst}
        isLast={isLast}
        color={event.color}
        logo={event.logo}
        // hideLogo={showChildrenDecoration}
      />

      <Flex {...childrenContainer}>
        {/* {isNested && showChildrenDecoration && (
          <TimeLineRowDecoration
            isFirst={false}
            isLast={false}
            color={event.color}
            logo={event.logo}
          />
        )} */}
        {children}
      </Flex>
    </Flex>
  );
};

export default TimeLineRow;
