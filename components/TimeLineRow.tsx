import {
  Box,
  BoxProps,
  Card,
  CardBody,
  CardBodyProps,
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
}

const TimeLineRow: React.FC<Props> = ({ event, isEven }) => {
  const rowStyle: FlexProps = {
    _after: {
      sm: {
        backgroundColor: "primary",
        borderColor: "primary",
        borderRadius: "16px",
        borderWidth: 2,
        content: '""',
        height: 4,
        left: {
          base: 2,
          md: isEven ? -2 : "auto",
        },
        position: "absolute",
        right: {
          base: "-8px",
          md: !isEven ? -2 : "auto",
        },
        top: "calc(50% - 8px)",
        transition: "all 1s",
        width: 4,
        zIndex: 1,
      },
    },
    _before: {
      sm: {
        background: "primary",
        content: '""',
        height: 0.5,
        left: {
          base: 4,
          md: isEven ? 2 : "auto",
        },
        position: "absolute",
        right: {
          base: 2,
          md: !isEven ? 2 : "auto",
        },
        top: `calc(50% - var(--chakra-sizes-0-5))`,
        transition: "all 1s",
        width: {
          base: 12,
          lg: 14,
          md: 10,
        },
        zIndex: 1,
      },
    },
    left: {
      base: 0,
      md: !isEven ? 0 : "50%",
    },
    paddingLeft: {
      sm: 12,
    },
    paddingX: {
      md: 6,
    },
    paddingY: {
      md: 3,
    },
    position: "relative",
    transform: {
      lg: `rotate(${isEven ? 1 : -1}deg)`,
    },
    transition: "all 1s",
    width: {
      base: "full",
      md: "50%",
    },
    zIndex: 1,
  };

  const cardStyle: BoxProps = {
    // backgroundColor: isEven ? "chakra-card-bg" : "chakra-card-secondary-bg",
    backgroundColor: "surface",
    padding: {
      base: 4,
      sm: 6,
      lg: 12,
    },
    paddingLeft: {
      lg: isEven ? 32 : 12,
      md: isEven ? 24 : 6,
      sm: 16,
    },
    paddingRight: {
      md: !isEven ? 24 : undefined,
      lg: !isEven ? 28 : undefined,
    },
    position: "initial",
    transition: "all 1s",
    width: "full",
  };

  const cardBodyStyle: CardBodyProps = {
    padding: 0,
  };

  return (
    <Flex as={ListItem} p={0} {...rowStyle}>
      <Card {...cardStyle}>
        <CardBody {...cardBodyStyle}>
          <TimeLineEvent event={event} isEven={isEven} />
        </CardBody>
      </Card>
    </Flex>
  );
};

export default TimeLineRow;
