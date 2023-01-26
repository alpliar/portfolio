import {
  Box,
  Flex,
  Heading,
  HeadingProps,
  Icon,
  IconProps,
  Stack,
  StackProps,
  Text,
  TextProps,
  useBreakpointValue,
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

  const mdDateHeight = 8;
  const mdDateWidth = 28;
  const mdDateOffset = mdDateWidth + mdDateHeight / 2;
  const lgDateHeight = 8;
  const lgDateWidth = 40;
  const lgDateOffset = 48;

  const dateStyle: TextProps = {
    color: "primary",
    display: {
      md: "inline-block",
    },
    fontFamily: "monospace",
    fontSize: {
      base: "sm",
      md: "md",
      lg: "xl",
    },
    fontWeight: "bold",
    left: {
      // md: "var(--chakra-sizes-32)",
      md: "50%",
      lg: isEven ? "-100%" : `100%`,
      // md: isEven ? -mdDateOffset : undefined,
    },
    paddingX: {
      md: 6,
    },
    // letterSpacing: 0,
    lineHeight: {
      lg: lgDateHeight,
      md: mdDateHeight,
    },
    position: {
      md: "absolute",
    },
    right: {
      lg: !isEven ? -lgDateOffset : undefined,
      // md: !isEven ? -mdDateOffset : undefined,
    },
    textAlign: {
      // md: "center",
      md: "left",
      lg: isEven ? "end" : "start",
    },
    textTransform: "lowercase",
    top: {
      md: -1,
      lg: `calc(50% - var(--chakra-sizes-${mdDateHeight / 2}))`,
    },
    transform: {
      md: "rotate(-5deg) translateY(calc(-1 * var(--chakra-sizes-6)))",
      lg: "inherit",
    },
    transition: "all ease-in-out 0.2s",
    width: {
      md: "50%",
      lg: "100%",
    },
    zIndex: {
      md: 1,
    },
  };

  const iconSize: IconProps["boxSize"] =
    useBreakpointValue({
      base: 8,
      sm: 8,
      md: 12,
      lg: 14,
    }) || 8;

  const iconStyle: IconProps = {
    borderColor: "primary",
    // color,
    borderRadius: "full",
    borderWidth: 2,
    boxSize: iconSize,
    color: "primary",
    display: {
      base: "none",
      sm: "inline-block",
    },
    fontSize: "18px",
    height: iconSize,
    padding: 1.5,
    position: {
      sm: "absolute",
      md: "inherit",
      lg: "absolute",
    },
    top: {
      sm: `calc(50% - var(--chakra-sizes-${iconSize / 2}))`,
    },
    transition: "all ease-in-out 0.2s",
    width: iconSize,
    zIndex: 1,
  };
  const iconResponsiveProps: IconProps = useBreakpointValue({
    sm: {
      left: 10,
    },
    md: {
      // textAlign: isEven ? "start" : "end",
      // right: 12,
      // left: isEven ? 12 : undefined,
      left: "calc(50% - var(--chakra-sizes-6))",
      top: 10,
    },
    lg: {
      textAlign: isEven ? "start" : "end",
      right: 16,
      left: isEven ? 16 : undefined,
    },
  }) as IconProps;

  const positionStyle: HeadingProps = {
    color: "primary",
    fontSize: {
      base: "md",
      sm: "xl",
    },
  };

  const contentStyle: StackProps = {
    transform: { lg: `rotate(${isEven ? -1 : 1}deg)` },
    alignItems: { md: "center", lg: "start" },
  };

  return (
    <>
      <Text {...dateStyle}>{date}</Text>
      <Icon as={logo} {...iconStyle} {...iconResponsiveProps} />
      <Stack {...contentStyle}>
        <Heading {...positionStyle}>{position}</Heading>
        <Text>{company}</Text>
        {description && (
          <Text
            paddingY={{ base: 3, md: 6 }}
            maxW={{ md: 96, lg: "inherit" }}
            marginX="auto"
            textAlign="start"
          >
            {description}
          </Text>
        )}
        {technologies && (
          <Flex maxW={{ md: 96, lg: "inherit" }} marginX="auto">
            <Technologies technologies={technologies.map((t) => t.label)} />
          </Flex>
        )}
      </Stack>
    </>
  );
};

export default TimeLineEvent;
