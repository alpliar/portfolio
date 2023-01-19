import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface LineProps {
  color: string;
}

const Line: React.FC<LineProps> = ({ color }) => (
  <Flex flex={1} h={96} bgColor={color} w={1} />
);

interface Props {
  isFirst: boolean;
  isLast: boolean;
  color: string;
  logo: IconType;
}

const TimeLineRowDecoration: React.FC<Props> = ({
  isFirst,
  isLast,
  color,
  logo,
}) => {
  const iconSize = { base: 8, lg: 12 };
  const iconContainerStyle: FlexProps = {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyItems: "stretch",
    minH: { base: 36 },
  };

  return (
    <Flex {...iconContainerStyle} paddingX={4}>
      <Line color={isFirst ? "transparent" : color} />
      <Icon boxSize={iconSize} as={logo} color={color} />
      <Line color={isLast ? "transparent" : color} />
    </Flex>
  );
};

export default TimeLineRowDecoration;
