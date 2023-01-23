import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HeadingProps,
  HStack,
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

interface Props {
  event: TimelineData;
  isEven: boolean;
}

const TimeLineEvent: React.FC<Props> = ({ event, isEven }) => {
  const { position, company, date, color, logo, description } = event;

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
      lg: "xl",
    },
    fontWeight: "bold",
    left: {
      lg: isEven ? -lgDateOffset : undefined,
      md: isEven ? -mdDateOffset : undefined,
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
      md: !isEven ? -mdDateOffset : undefined,
    },
    textAlign: {
      md: isEven ? "end" : "start",
    },
    textTransform: "lowercase",
    top: {
      md: `calc(50% - var(--chakra-sizes-${mdDateHeight / 2}))`,
    },
    transition: "all 1s",
    width: {
      lg: lgDateWidth,
      md: mdDateWidth,
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
    },
    top: `calc(50% - var(--chakra-sizes-${iconSize / 2}))`,
    transition: "all 1s",
    width: iconSize,
    zIndex: 1,
  };
  const iconResponsiveProps: IconProps = useBreakpointValue({
    sm: {
      left: 16,
    },
    md: {
      textAlign: isEven ? "start" : "end",
      right: 12,
      left: isEven ? 12 : undefined,
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
    transform: { lg: "rotate(1deg)" },
  };

  return (
    <>
      <Text {...dateStyle}>{date}</Text>
      <Icon as={logo} {...iconStyle} {...iconResponsiveProps} />
      <Stack {...contentStyle}>
        <Heading {...positionStyle}>{position}</Heading>
        <Text>{company}</Text>
        <Text>{description}</Text>
      </Stack>
    </>
  );
};

export default TimeLineEvent;
