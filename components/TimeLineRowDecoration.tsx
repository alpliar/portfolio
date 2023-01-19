import { Flex, FlexProps, Icon, IconProps } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface LineProps {
  color: string;
}

const Line: React.FC<LineProps> = ({ color }) => (
  <Flex flex={1} h={96} bgColor={color} w={1} />
);

interface Props {
  isEven: boolean;
  isFirst: boolean;
  isLast: boolean;
  color: string;
  logo: IconType;
  hideLogo?: boolean;
}

const TimeLineRowDecoration: React.FC<Props> = ({
  isEven,
  isFirst,
  isLast,
  color,
  logo,
  hideLogo = false,
}) => {
  const iconSize = isFirst || isLast ? 12 : 8;
  const iconContainerStyle: FlexProps = {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyItems: "stretch",
    minH: { base: 36 },
  };
  const iconStyle: IconProps = {
    boxSize: 8,
    color,
    // transform: !isFirst && !isLast && isEven ? "rotate(90deg)" : undefined,
  };

  return (
    <Flex {...iconContainerStyle} paddingX={4}>
      <Line color={isFirst ? "transparent" : color} />
      {!hideLogo && <Icon as={logo} {...iconStyle} />}
      <Line color={isLast ? "transparent" : color} />
    </Flex>
  );
};

export default TimeLineRowDecoration;
