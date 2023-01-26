import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface FeaturesGridProps {
  children: ReactNode;
}

interface FeaturesProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  columns?: number;
}
const Features: React.FC<FeaturesProps> = ({
  children,
  title,
  subtitle,
  columns,
}) => {
  const FeaturesGrid: React.FC<FeaturesGridProps> = ({ children }) => (
    <Stack
      spacing={{
        base: 10,
        md: 0,
      }}
      display={{
        md: "grid",
      }}
      gridTemplateColumns={{
        md: `repeat(${columns},1fr)`,
      }}
      gridColumnGap={{
        md: 8,
      }}
      gridRowGap={{
        md: 10,
      }}
      transition="all ease-in-out 0.2s"
    >
      {children}
    </Stack>
  );

  return (
    <>
      <Flex direction="column" align={{ base: "left", md: "center" }}>
        <Heading
          as="h1"
          mt={2}
          fontSize={{
            base: "3xl",
            sm: "4xl",
          }}
          lineHeight="8"
          fontWeight="extrabold"
          letterSpacing="tight"
          color="primary"
        >
          {title}
        </Heading>
        <Text
          mt={4}
          maxW="2xl"
          fontSize="xl"
          mx={{
            lg: "auto",
          }}
          color="gray.500"
          _dark={{
            color: "gray.400",
          }}
        >
          {subtitle}
        </Text>
      </Flex>

      <FeaturesGrid>{children}</FeaturesGrid>
    </>
  );
};

export default Features;
