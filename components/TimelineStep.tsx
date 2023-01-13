import Icon from "@chakra-ui/icon";
import {
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

type Props = {
  step: TimelineData;
  isNested?: boolean;
};

const TimelineStep: React.FC<Props> = ({
  step: { color, logo, title, date, description, steps },
  isNested = false,
}) => {
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
                boxSize={iconSize / 2}
                as={logo}
                color={color}
                position="absolute"
                left={-spacing}
                mb={-iconSize / 2}
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
      <Stack maxW={maxWidth} mb={!isNested ? spacing * 3 : 0}>
        <Heading
          as="h2"
          fontSize="xl"
          minHeight={iconSize}
          display="flex"
          alignItems="center"
          mt={isNested ? iconSize : 0}
        >
          {title}
        </Heading>
        {/* <Text fontStyle="italic">{date}</Text> */}
        <Text fontSize="sm">
          {date}, {description}
        </Text>
        <Text>{description}</Text>
        <Box>
          {steps?.map((subStep, index) => (
            <TimelineStep key={index} step={subStep} isNested />
          ))}
        </Box>
      </Stack>
    </Flex>
  );
};

export default TimelineStep;
