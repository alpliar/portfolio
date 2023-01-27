import {
  BoxProps,
  Card,
  CardBody,
  CardBodyProps,
  Flex,
  FlexProps,
  List,
  ListItem,
  ListProps,
} from "@chakra-ui/react";
import React from "react";
import timelineData from "../data/timeline.data";
import { TimelineData } from "../models/TimelineData.model";
import TimeLineEvent from "./TimeLineEvent";

type Props = {};

interface TimeLineRowProps {
  event: TimelineData;
  isEven: boolean;
  isFirst: boolean;
  isLast: boolean;
  isNested?: boolean;
}

const TimeLineRow: React.FC<TimeLineRowProps> = ({ event, isEven }) => {
  const rowStyle: FlexProps = {
    _after: {
      // round mark on time line
      backgroundColor: "primary",
      borderColor: "primary",
      borderRadius: "16px",
      borderWidth: 2,
      content: '""',
      height: 4,
      left: "calc(50% - var(--chakra-sizes-1))",
      position: "absolute",
      right: "-8px",
      top: -2,
      transition: "all ease-in-out 0.2s",
      width: 4,
      zIndex: 1,
    },
    left: 0,
    paddingX: { base: 0, md: 6 },
    position: "relative",
    transition: "all ease-in-out 0.2s",
    width: "full",
    zIndex: 1,
  };

  const cardStyle: BoxProps = {
    maxWidth: "4xl",
    margin: "auto",
    backgroundColor: event.isHighlight ? "highlight" : "surface",
    paddingX: { base: 3, sm: 6, md: 12 },
    paddingY: { base: 6, sm: 12 },
    position: "initial",
    transition: "all ease-in-out 0.2s",
    width: "full",
    _after: {
      md: {
        background: "secondary",
        bottom: "0px",
        content: '""',
        left: "50%",
        position: "absolute",
        top: "0px",
        transition: "all ease-in-out 0.2s",
        width: "var(--chakra-sizes-2)",
      },
    },
  };

  const cardBodyStyle: CardBodyProps = {
    padding: 0,
  };

  return (
    <Flex as={ListItem} {...rowStyle}>
      <Card {...cardStyle}>
        <CardBody {...cardBodyStyle}>
          <TimeLineEvent event={event} isEven={isEven} />
        </CardBody>
      </Card>
    </Flex>
  );
};

const TimeLine: React.FC<Props> = ({}) => {
  const listStyle: ListProps = {
    _after: {
      background: "secondary",
      bottom: 0,
      content: '""',
      left: "50%",
      position: "absolute",
      top: 0,
      transition: "all ease-in-out 0.2s",
      width: 2,
    },
    margin: "auto",
    maxWidth: "container.lg",
    padding: 0,
    paddingTop: 20,
    position: "relative",
    spacing: 20,
    transition: "all ease-in-out 0.2s",
    width: "full",
  };

  return (
    <List {...listStyle}>
      {timelineData.map((data, index) => {
        const isEven = (index + 1) % 2 === 0;
        const isFirst = index === 0;
        const isLast = index === timelineData.length - 1;

        return (
          <>
            <TimeLineRow
              isEven={isEven}
              isFirst={isFirst}
              isLast={isLast}
              event={data}
            />
          </>
        );
      })}
    </List>
  );
};

export default TimeLine;
