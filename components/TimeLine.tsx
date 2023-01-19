import {
  BoxProps,
  Flex,
  FlexProps,
  Icon,
  List,
  ListItem,
  ListProps,
} from "@chakra-ui/react";
import React from "react";
import timelineData from "../data/timeline.data";
import TimeLineEvent from "./TimeLineEvent";
import TimeLineRow from "./TimeLineRow";

type Props = {};

const TimeLine: React.FC<Props> = ({}) => {
  const containerStyle: ListProps = { margin: { base: "auto", lg: 0 } };

  return (
    <List {...containerStyle}>
      {timelineData.map((data, index) => {
        const isEven = index % 2 === 0;
        const isFirst = index === 0;
        const isLast = index === timelineData.length - 1;

        return (
          <>
            <TimeLineRow
              isEven={isEven}
              isFirst={isFirst}
              isLast={isLast}
              event={data}
            >
              <TimeLineEvent event={data} />
            </TimeLineRow>
            {/* {data.steps?.map((subStep, index) => (
              <Box key={index} paddingLeft={16}>
                <TimeLineEvent event={subStep} />
              </Box>
            ))} */}
          </>
        );
      })}
    </List>
  );
};

export default TimeLine;
