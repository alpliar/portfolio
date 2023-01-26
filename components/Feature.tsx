import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Icon,
  IconProps,
  ResponsiveValue,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface FeatureProps {
  children: ReactNode;
  icon: IconType;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ children, icon, title }) => {
  const iconSize: ResponsiveValue<number> = { base: 8, md: 10 };
  const textStyle: BoxProps = {
    mt: 2,
    color: "gray.500",
    _dark: {
      color: "gray.400",
    },
  };
  const titleStyle: HeadingProps = {
    color: "primary",
    fontSize: "lg",
    fontFamily: "monospace",
    lineHeight: iconSize,
    verticalAlign: "center",
  };

  const iconStyle: IconProps = {
    color: "primary",
    boxSize: iconSize,
    stroke: "currentcolor",
    "aria-hidden": "true",
  };

  const iconContainerStyle: FlexProps = {
    alignItems: "center",
    justifyContent: "center",
    height: 12,
    width: 12,
    rounded: "md",
    backgroundColor: "alpha",
  };

  return (
    <Flex>
      <Flex shrink={0}>
        <Flex {...iconContainerStyle}>
          <Icon as={icon} {...iconStyle} />
        </Flex>
      </Flex>
      <Box ml={4}>
        <Heading as="h2" {...titleStyle}>
          {title}
        </Heading>
        <Box {...textStyle}>{children}</Box>
      </Box>
    </Flex>
  );
};

export default Feature;
