import { List, ListProps } from "@chakra-ui/react";
import React from "react";
import timelineData from "../data/timeline.data";
import TimeLineRow from "./TimeLineRow";

type Props = {};

const TimeLine: React.FC<Props> = ({}) => {
  const listStyle: ListProps = {
    _after: {
      lg: {
        left: "50%",
      },
      md: {
        // left: "var(--chakra-sizes-32)",
        left: "50%",
        transition: "all ease-in-out 0.2s",
      },
      sm: {
        background: "secondary",
        bottom: 0,
        content: '""',
        left: 8,
        marginLeft: -1,
        position: "absolute",
        top: 0,
        transition: "all ease-in-out 0.2s",
        width: 2,
      },
    },
    margin: "0 auto",
    maxWidth: "container.lg",
    paddingX: 4,
    paddingY: 0,
    paddingTop: { md: 20 },
    position: "relative",
    spacing: { base: 4, md: 20, lg: 4 },
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
