import {
  Box,
  Card,
  CardBody,
  Heading,
  HeadingProps,
  Icon,
  IconProps,
  Stack,
  Text,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { TimelineData } from "../models/TimelineData.model";

interface Props {
  event: TimelineData;
  isEven: boolean;
  highlightColor: string;
}

const TimeLineEvent: React.FC<Props> = ({ event, isEven, highlightColor }) => {
  const { position, company, date, color, logo, description } = event;
  const dateAbsoluteStyle: TextProps = {
    position: "absolute",
    display: "inline-block",
    top: "calc(50% - var(--chakra-sizes-2))",
    textAlign: isEven ? "end" : "start",
    lineHeight: 4,
    zIndex: 1,
    width: 28,
    left: isEven ? -32 : undefined,
    right: !isEven ? -32 : undefined,
    isTruncated: true,
  };
  const dateBaseStyle: TextProps = {
    color: highlightColor,
    fontSize: "sm",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  };
  const dateStyle: TextProps = useBreakpointValue({
    md: dateAbsoluteStyle,
  }) as TextProps;

  const iconSize: IconProps["boxSize"] =
    useBreakpointValue({
      base: 8,
      md: 12,
    }) || 8;

  const iconStyle: IconProps = {
    transition: "all 1s",
    boxSize: iconSize,
    color: highlightColor,
    position: "absolute",
    display: "inline-block",
    width: iconSize,
    height: iconSize,
    padding: 1.5,
    top: `calc(50% - var(--chakra-sizes-${iconSize / 2}))`,
    borderWidth: 2,
    borderColor: highlightColor, //color,
    borderRadius: "full",
    fontSize: "18px",
    zIndex: 1,
  };
  const iconResponsiveProps: IconProps = useBreakpointValue({
    base: {
      left: 14,
    },
    md: {
      left: isEven ? 14 : undefined,
      right: 14,
      textAlign: isEven ? "start" : "end",
    },
  }) as IconProps;

  const positionStyle: HeadingProps = {
    fontSize: "lg",
    // fontWeight: "normal",
    color: highlightColor,
  };

  return (
    <>
      <Text {...dateBaseStyle} {...dateStyle}>
        {date}
      </Text>
      <Icon as={logo} {...iconStyle} {...iconResponsiveProps} />
      <Stack>
        <Heading {...positionStyle}>{position}</Heading>
        <Text>{company}</Text>
        <Text>{description}</Text>
      </Stack>
    </>
  );
};

export default TimeLineEvent;
