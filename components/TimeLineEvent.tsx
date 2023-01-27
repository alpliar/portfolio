import {
  Box,
  Flex,
  Heading,
  HeadingProps,
  Icon,
  IconProps,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  Text,
  TextProps,
} from "@chakra-ui/react";
import React from "react";
import { TimelineData } from "../models/TimelineData.model";
import Technologies from "./Technologies";

interface Props {
  event: TimelineData;
  isEven: boolean;
}

const TimeLineEvent: React.FC<Props> = ({ event, isEven }) => {
  const { position, company, date, color, logo, description, technologies } =
    event;

  const dateStyle: TextProps = {
    color: "primary",
    fontFamily: "monospace",
    fontSize: "md",
    fontWeight: "bold",
    left: "50%",
    paddingX: { md: 6 },
    position: { md: "absolute" },
    textTransform: "lowercase",
    top: { base: -2, sm: -4 },
    transform: {
      md: "rotate(-5deg) translateY(calc(-1 * var(--chakra-sizes-6)))",
    },
    transition: "all ease-in-out 0.2s",
    width: { md: "50%" },
    zIndex: 1,
  };

  const iconSize = 12;

  const iconStyle: IconProps = {
    position: { md: "absolute" },
    borderColor: "pale",
    bgColor: "surface",
    color: "primary",
    borderRadius: "full",
    borderWidth: 2,
    boxSize: iconSize,
    fontSize: "18px",
    padding: 1.5,
    left: "calc(50% - var(--chakra-sizes-5))",
    top: `calc(50% - var(--chakra-sizes-${iconSize / 2}))`,
    transition: "all ease-in-out 0.2s",
    zIndex: 1,
  };

  const positionStyle: HeadingProps = {
    color: "primary",
    fontSize: "xl",
    maxWidth: "xs",
  };

  const contentStyle: SimpleGridProps = {
    maxWidth: { base: "xs", sm: "sm", md: "container.md" },
    margin: "auto",
    columns: { base: 1, md: 2 },
    gap: { base: 3, md: iconSize * 2 },
  };

  const technologiesStyle = {
    justify: { base: "start", md: "end" },
    size: { base: "md", lg: "lg" },
  };

  return (
    <>
      <SimpleGrid {...contentStyle}>
        <Stack gap={{ base: 8, md: 0 }}>
          <Stack align="center">
            <Text {...dateStyle}>{date}</Text>
            <Icon as={logo} {...iconStyle} />
          </Stack>
          <Flex gap={2}>
            <Box>
              <Heading {...positionStyle}>{position}</Heading>
              <Text>{company}</Text>
            </Box>
          </Flex>

          {description && (
            <Text
              marginTop={{ base: 3, md: 5 }}
              maxWidth={{ md: 96, lg: "inherit" }}
              marginX="auto"
            >
              {description}
            </Text>
          )}
        </Stack>
        {technologies && (
          <Box textAlign={{ base: "start", md: "end" }}>
            <Technologies {...technologiesStyle} technologies={technologies} />
          </Box>
        )}
      </SimpleGrid>
    </>
  );
};

export default TimeLineEvent;
