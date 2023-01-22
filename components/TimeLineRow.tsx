import {
  Box,
  BoxProps,
  Card,
  CardBody,
  Flex,
  FlexProps,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { TimelineData } from "../models/TimelineData.model";
import TimeLineEvent from "./TimeLineEvent";

interface Props {
  event: TimelineData;
  isEven: boolean;
  isFirst: boolean;
  isLast: boolean;
  isNested?: boolean;
  highlightColor: string;
}

const TimeLineRow: React.FC<Props> = ({ event, isEven, highlightColor }) => {
  const style: FlexProps = {
    position: "relative",
    width: { base: "full", md: "50%" },
    left: { base: 0, md: !isEven ? 0 : "50%" },
    paddingY: { md: 3 },
    paddingX: { md: 6 },
    paddingLeft: { base: 12 },
    // paddingRight: { base: 6 },
    transition: "left 1s",
    _before: {
      content: '""',
      position: "absolute",
      width: { base: 9, md: 12 },
      height: 0.5,
      top: `calc(50% - var(--chakra-sizes-0-5))`,
      right: { base: 2, md: !isEven ? 2 : "auto" },
      left: { base: 5, md: isEven ? 2 : "auto" },
      background: highlightColor,
      zIndex: "1",
    },
    _after: {
      content: '""',
      position: "absolute",
      width: 4,
      height: 4,
      top: "calc(50% - 8px)",
      right: { base: "-8px", md: !isEven ? -2 : "auto" },
      left: { base: 2, md: isEven ? -2 : "auto" },
      background: useColorModeValue(
        "white",
        "var(--chakra-colors-chakra-body-bg)"
      ),
      borderWidth: 2,
      borderColor: highlightColor,
      borderRadius: "16px",
      zIndex: 1,
    },
  };

  const cardStyle: BoxProps = {
    position: "initial",
    width: "full",
    padding: 6,
    paddingLeft: { base: 14, md: isEven ? 24 : 6 },
    paddingRight: { md: !isEven ? 24 : undefined },
    transition: "all 0.5s",
  };

  return (
    <Flex as={ListItem} p={0} {...style}>
      <Card {...cardStyle}>
        <CardBody p={0}>
          <TimeLineEvent
            event={event}
            isEven={isEven}
            highlightColor={highlightColor}
          />
        </CardBody>
      </Card>
    </Flex>
  );
};

export default TimeLineRow;
