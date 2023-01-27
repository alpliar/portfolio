import {
  Box,
  Heading,
  HeadingProps,
  Icon,
  IconProps,
  SimpleGrid,
  SimpleGridProps,
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
  const lgDateHeight = 8;
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
      left: "calc(50% - var(--chakra-sizes-5))",
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
    maxWidth: { md: 64, lg: "inherit" },
  };

  const contentStyle: SimpleGridProps = {
    transform: { lg: `rotate(${isEven ? -1 : 1}deg)` },
    alignItems: { md: "start", lg: "start" },
    maxWidth: "container.sm",
    margin: "auto",
    columns: { base: 1, md: 2, lg: 1 },
    gap: { base: 5, md: iconSize * 2, lg: 5 },
  };

  return (
    <>
      <Text {...dateStyle}>{date}</Text>
      <Icon as={logo} {...iconStyle} {...iconResponsiveProps} />
      <SimpleGrid {...contentStyle}>
        <Box>
          <Heading {...positionStyle}>{position}</Heading>
          <Text>{company}</Text>
          {description && (
            <Text
              marginTop={{ base: 3, md: 5 }}
              maxWidth={{ md: 96, lg: "inherit" }}
              marginX="auto"
            >
              {description}
            </Text>
          )}
        </Box>
        {technologies && (
          <Technologies
            textAlign={{ base: "start", md: "end", lg: "start" }}
            justify={{ base: "start", md: "end", lg: "start" }}
            technologies={technologies.map((t) => t.label)}
            size={{ base: "md", lg: "lg" }}
          />
        )}
      </SimpleGrid>
    </>
  );
};

export default TimeLineEvent;
