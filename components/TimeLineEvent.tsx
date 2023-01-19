import {
  Box,
  Card,
  CardBody,
  CardProps,
  Heading,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { TimelineData } from "../models/TimelineData.model";

type Props = { event: TimelineData };

const TimeLineEvent: React.FC<Props> = ({ event }) => {
  const { position, company, date, color } = event;
  const cardStyle: CardProps = {
    width: { base: "full", sm: 80, lg: 96 },
    borderWidth: 2,
    borderColor: color,
    borderRadius: "2xl",
  };
  return (
    <Card {...cardStyle}>
      <Stack as={CardBody}>
        <Text fontWeight="bold">{date}</Text>
        <Box>
          <Heading fontSize="lg" fontWeight="normal">
            {position}
          </Heading>
          <Text>{company}</Text>
        </Box>
      </Stack>
    </Card>
  );
};

export default TimeLineEvent;
