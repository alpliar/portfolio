import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
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
  const { title, date, description, steps, color, logo } = step;

  const StepTitle: React.FC<WithStep> = ({ step, isNested = false }) => (
    <Heading as="h2" fontSize="xl">
      {step.title}
    </Heading>
  );

  const StepDescription: React.FC<WithStep> = ({ step, isNested = false }) => (
    <>
      {/* <Text fontStyle="italic">{date}</Text> */}
      <Text fontSize="sm">
        {step.date}, {step.description}
      </Text>
      <Text>{step.description}</Text>

      <Box>
        {step.steps?.map((subStep, index) => (
          <TimelineStep key={index} step={subStep} isNested />
        ))}
      </Box>

      {/* <Accordion allowMultiple>
        {step.steps?.map((subStep, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <StepTitle step={subStep} />
            </AccordionButton>
            <AccordionPanel></AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion> */}
    </>
  );

  return (
    <>
      {isNested ? (
        <Accordion
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