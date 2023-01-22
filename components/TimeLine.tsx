import { List, ListProps } from "@chakra-ui/react";
import React from "react";
import timelineData from "../data/timeline.data";
import TimeLineRow from "./TimeLineRow";

type Props = {};

const TimeLine: React.FC<Props> = ({}) => {
  const listStyle: ListProps = {
    transition: "all 0.5s",
    spacing: 4,
    position: "relative",
    width: "full",
    maxWidth: "container.lg",
    margin: "0 auto",
    paddingX: 4,
    paddingY: 0,
    _after: {
      base: {
        transition: "all 1s",
        content: '""',
        position: "absolute",
        width: 2,
        background: "primary",
        top: 0,
        bottom: 0,
        left: 8,
        marginLeft: -1,
      },
      md: {
        transition: "all 1s",
        left: "50%",
      },
    },
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
