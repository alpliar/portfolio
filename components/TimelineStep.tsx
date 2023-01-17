import Icon from "@chakra-ui/icon";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { TimelineData } from "../models/TimelineData.model";
import TimelineStepDescription from "./TimelineStepDescription";

type Props = {
  step: TimelineData;
  isNested?: boolean;
};

const TimelineStep: React.FC<Props> = ({ step, isNested = false }) => {
  const { color, logo, title, date, description, steps } = step;
  const iconSize = 8;
  const spacing = 2;
  const borderColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const borderSize = 2;
  const borderStyle = "dashed";
  const maxWidth = "xs";

  return (
    <Flex
      marginInlineStart={isNested ? `-${spacing * 2} !important` : 0}
      marginTop={isNested ? -spacing * 2 : 0}
    >
      <Stack spacing={spacing} mr={spacing}>
        {isNested && (
          <Box
            width={iconSize}
            height={iconSize}
            transform="rotate(-45deg)"
            borderLeft={borderSize}
            borderStyle={borderStyle}
            borderColor={borderColor}
          />
        )}
        {!isNested && <Icon boxSize={iconSize} as={logo} color={color} />}

        <SimpleGrid flex={1} columns={2}>
          <Box />
          {/* Vertical dotted line (the timeline breadcrumb) */}
          <Flex
            borderLeft={borderSize}
            borderStyle={borderStyle}
            borderColor={borderColor}
            minH={iconSize}
            position="relative"
            alignItems="flex-start"
          >
            {isNested && (
              <Icon
                boxSize={iconSize}
                as={logo}
                color={color}
                position="absolute"
                left={`-122%`}
                mb={-iconSize}
              />
            )}
          </Flex>
        </SimpleGrid>
        {/* {isNested && (
          <Box
            width={iconSize}
            height={iconSize}
            transform="rotate(45deg)"
            borderLeft={borderSize}
            borderStyle={borderStyle}
            borderColor={borderColor}
          />
        )} */}
      </Stack>
      <Stack maxW={maxWidth} w="full" mb={!isNested ? spacing * 3 : 0}>
        <TimelineStepDescription
          step={{ color, logo, title, date, description, steps }}
          iconSize={iconSize}
          isNested={isNested}
        />
      </Stack>
    </Flex>
  );
};

export default TimelineStep;
