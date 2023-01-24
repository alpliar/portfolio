import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import PageHeaderEnd from "../components/PageHeaderEnd";
import PageHeaderLogo from "../components/PageHeaderLogo";
import Header from "./Header";

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
      transition="all 1s"
    >
      {children}
    </Stack>
  );
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
          <Header start={<PageHeaderLogo />} end={<PageHeaderEnd />} />
          <Center>
            <Divider maxW={64} mt={8} mb={8} />
          </Center>
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

          <Center>
            <Divider maxW={64} mt={8} mb={8} />
          </Center>

          <Stack mt={10}>
            <FeaturesGrid>{children}</FeaturesGrid>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Features;
