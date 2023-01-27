import {
  BoxProps,
  Card,
  CardBody,
  CardBodyProps,
  Flex,
  FlexProps,
  ListItem,
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
      // round mark on time line
      sm: {
        backgroundColor: "primary",
        borderColor: "primary",
        borderRadius: "16px",
        borderWidth: 2,
        content: '""',
        height: 4,
        left: {
          base: 0,
          md: "calc(50% - var(--chakra-sizes-1))",
          lg: isEven ? -1 : "auto",
        },
        position: "absolute",
        right: {
          base: "-8px",
          lg: !isEven ? -3 : "auto",
        },
        top: {
          base: "calc(50% - var(--chakra-sizes-2))",
          md: "var(--chakra-sizes-1)",
          lg: "calc(50% - var(--chakra-sizes-2))",
        },
        transition: "all ease-in-out 0.2s",
        width: 4,
        zIndex: 1,
      },
    },
    _before: {
      sm: {
        background: "primary",
        content: '""',
        display: { md: "none", lg: "inherit" },
        height: { base: 0.5, md: 10, lg: 0.5 },
        left: {
          sm: 4,
          md: `calc(50% - var(--chakra-sizes-0-5))`,
          lg: isEven ? 2 : "auto",
        },
        position: "absolute",
        right: {
          sm: 2,
          lg: !isEven ? 1 : "auto",
        },
        top: {
          base: `calc(50% - var(--chakra-sizes-0-5))`,
          md: 0,
          lg: `calc(50% - var(--chakra-sizes-0-5))`,
        },
        transition: "all ease-in-out 0.2s",
        width: {
          sm: 6,
          lg: 14,
          md: 1,
        },
        zIndex: 1,
      },
    },
    left: {
      base: 0,
      lg: !isEven ? 0 : "50%",
    },
    paddingLeft: {
      sm: 6,
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
    transition: "all ease-in-out 0.2s",
    width: {
      base: "full",
      lg: "50%",
    },
    zIndex: 1,
  };

  const cardStyle: BoxProps = {
    backgroundColor: "surface",
    padding: {
      base: 4,
      sm: 6,
      md: 12,
    },
    paddingLeft: {
      lg: isEven ? 32 : 12,
      md: undefined,
      sm: 16,
    },
    paddingRight: {
      lg: !isEven ? 28 : undefined,
    },
    position: "initial",
    transition: "all ease-in-out 0.2s",
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
