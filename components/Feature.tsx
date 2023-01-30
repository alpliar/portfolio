import {
  BoxProps,
  Card,
  CardBody,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface FeatureProps {
  children: ReactNode;
  icon: IconType;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ children, icon, title }) => {
  const titleStyle: HeadingProps = {
    color: "primary",
    fontSize: "lg",
    fontFamily: "monospace",
    minHeight: 10,
    verticalAlign: "center",
  };

  const iconStyle: IconProps = {
    color: "primary",
    boxSize: 8,
    stroke: "currentcolor",
    "aria-hidden": "true",
  };

  const iconContainerStyle: FlexProps = {
    alignItems: "center",
    justifyContent: "center",
    width: 10,
    height: 10,
    rounded: "md",
    backgroundColor: "alpha",
  };

  return (
    <Card bgColor="surface">
      <Flex gap={4} as={CardBody}>
        <Flex>
          <Flex {...iconContainerStyle}>
            <Icon as={icon} {...iconStyle} />
          </Flex>
        </Flex>
        <Flex direction="column" wrap="wrap" gap={2} w="full">
          <Heading as="h2" {...titleStyle}>
            {title}
          </Heading>
          <Flex direction="column" wrap="wrap" gap={4} color="discrete">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Feature;
