import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { TimelineData } from "../models/TimelineData.model";
import TimelineStep from "./TimelineStep";

type Props = {
  step: TimelineData;
  isNested?: boolean;
  iconSize?: number;
};

type WithStep = {
  step: TimelineData;
  isNested?: boolean;
};

const TimelineStepDescription: React.FC<Props> = ({
  step,
  isNested = false,
  iconSize = 0,
}) => {
  const StepTitle: React.FC<WithStep> = ({ step }) => (
    <Heading as="h2" fontSize={isNested ? "sm" : "xl"} textAlign="start">
      {step.position}
    </Heading>
  );

  const StepDescription: React.FC<WithStep> = ({ step }) => (
    <>
      <Stack>
        <Wrap>
          <WrapItem>
            {step.date && (
              <Text fontSize={isNested ? "xs" : "sm"}>{step.date}</Text>
            )}
          </WrapItem>
          <WrapItem>
            {step.company && (
              <Text fontSize={isNested ? "xs" : "sm"}>@ {step.company}</Text>
            )}
          </WrapItem>
        </Wrap>
        {step.description && <Text>{step.description}</Text>}
      </Stack>

      <Box>
        {step.steps?.map((subStep, index) => (
          <TimelineStep key={index} step={subStep} isNested />
        ))}
      </Box>
    </>
  );

  return (
    <>
      {isNested ? (
        <Accordion
          defaultIndex={[0]}
          allowMultiple
          borderBottom="transparent"
          borderTop="transparent"
          style={{
            padding: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            minHeight: iconSize,
          }}
        >
          <AccordionItem>
            <AccordionButton
              p={0}
              minHeight={iconSize}
              display="flex"
              alignItems="center"
              mt={isNested ? iconSize : 0}
            >
              <StepTitle step={step} isNested />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={0}>
              <StepDescription step={step} isNested />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <StepTitle step={step} />
          <StepDescription step={step} />
        </>
      )}
    </>
  );
};

export default TimelineStepDescription;
