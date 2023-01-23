import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface FeaturesGridProps {
  children: ReactNode;
}

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
      md: "repeat(2,1fr)",
    }}
    gridColumnGap={{
      md: 8,
    }}
    gridRowGap={{
      md: 10,
    }}
    transition="all 1s"
  >
    {children}
  </Stack>
);

interface FeaturesProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}
const Features: React.FC<FeaturesProps> = ({ children, title, subtitle }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box py={12} bgColor="chakra-card-bg" rounded="xl">
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            sm: 8,
            md: 16,
            lg: 32,
          }}
          transition="all 1s"
        >
          <Box
            textAlign={{
              lg: "center",
            }}
          >
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
          </Box>

          <Stack mt={10}>
            <FeaturesGrid>{children}</FeaturesGrid>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Features;
