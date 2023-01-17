import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import timelineData from "../data/timeline.data";
import TimelineStep from "./TimelineStep";

type Props = {};

const Timeline: React.FC<Props> = ({}) => {
  return (
    <List spacing={4}>
      {timelineData.map((data, key) => (
        <ListItem key={key}>
          <TimelineStep step={data} />
        </ListItem>
      ))}
    </List>
  );
};

export default Timeline;