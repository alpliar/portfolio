import Icon from "@chakra-ui/icon";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { TimelineData } from "../models/TimelineData.model";

type Props = {
  step: TimelineData;
};

const TimelineStep: React.FC<Props> = ({ step }) => {
  return (
    <HStack>
      <Icon boxSize={8} as={step.logo} color={step.color} mr={4} />
      <Box>
        <Heading as="h2" fontSize="md">
          {step.title}
        </Heading>
        <Text fontStyle="italic">{step.date}</Text>
        <Text>{step.description}</Text>
      </Box>
    </HStack>
  );
};

export default TimelineStep;
