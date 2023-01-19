import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import timelineData from "../data/timeline.data";
import TimelineStep from "./TimelineStep";

type Props = {};

const Timeline: React.FC<Props> = ({}) => {
  return (
    <List spacing={2} margin="auto">
      {timelineData.map((data, key) => {
        return (
          <ListItem key={key} mt={0}>
            <TimelineStep step={data} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Timeline;
