import { Box, chakra, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import Link from "../components/Link";

type Props = {
  icon?: IconType;
  titleStart: string;
  titleEnd: string;
  description: string;
};

const SingleFeature: React.FC<Props> = ({
  icon = undefined,
  titleStart,
  titleEnd,
  description,
}) => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        w="full"
        maxW="7xl"
        px={4}
        mx="auto"
        textAlign="center"
        bg="surface"
        rounded="md"
        shadow="base"
      >
        <Box px={{ base: 0, lg: 4 }} py={20} borderWidth="1" color="primary">
          <Box w={{ base: "full" }} mx="auto">
            <Text
              mb={2}
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight={{ base: "bold", lg: "extrabold" }}
              lineHeight="tight"
              display="flex"
              flexDirection={{ base: "column" }}
              //   alignItems="baseline"
              justifyItems="start"
              alignItems="center"
            >
              <Flex as="span" align="center" gap={2}>
                <Icon as={icon} alignSelf="center" />
                {titleStart}
              </Flex>
              <chakra.span
                fontSize="2xl"
                fontWeight="medium"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
              >
                {titleEnd}
              </chakra.span>
            </Text>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", lg: "xl" }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {description}
            </chakra.p>
            {/* <Stack
              display={{ base: "block", lg: "flex" }}
              spacing={2}
              justifyContent="center"
              direction={{ base: "column", lg: "row" }}
            >
              <Link
                href="/"
                width={{ base: "full", lg: "auto" }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                _light={{
                  color: "white",
                }}
                bg="brand.600"
                _dark={{
                  bg: "brand.500",
                }}
                _hover={{
                  bg: "brand.700",
                  _dark: {
                    bg: "brand.600",
                  },
                }}
              >
                Get started
              </Link>
              <Link
                href="/"
                w={{ base: "full", lg: "auto" }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                color="brand.600"
                bg="white"
                _hover={{
                  bg: "brand.50",
                }}
              >
                Contact Us
              </Link>
            </Stack> */}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SingleFeature;
