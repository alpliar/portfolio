import { List, ListProps } from "@chakra-ui/react";
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
              <TimeLineRow
                key={index}
                event={subStep}
                isEven={false}
                isFirst={false}
                isLast={false}
                isNested={true}
              >
                <TimeLineEvent event={data} />
              </TimeLineRow>
            ))} */}
          </>
        );
      })}
    </List>
  );
};

export default TimeLine;
