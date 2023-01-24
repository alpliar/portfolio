import {
  Box,
  BoxProps,
  Button,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  TextProps,
  useBreakpointValue,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface FeatureWithFeatureListProps {
  description: string;
  features: string[];
  icon: IconType;
  title: string;
}

const FeatureWithFeatureList: React.FC<FeatureWithFeatureListProps> = ({
  description,
  features,
  icon,
  title,
}) => {
  const Feature = (props: TextProps) => {
    return (
      <Flex justifyContent={{ base: "center", lg: "left" }}>
        <Icon
          as={FaCheck}
          color="primary"
          boxSize={5}
          mt={1}
          mr={2}
          viewBox="0 0 20 20"
          fill="currentColor"
        />
        <Text
          fontSize="lg"
          color="gray.700"
          _dark={{
            color: "gray.400",
          }}
          {...props}
        />
      </Flex>
    );
  };

  const colorScheme = useColorModeValue("purple", "cyan");
  const boxSize = 12;

  const containerStyle: BoxProps = {
    width: "full",
    shadow: "xl",
    backgroundColor: "white",
    _dark: {
      backgroundColor: "gray.800",
    },
    paddingX: 8,
    paddingY: 8,
    mx: "auto",
  };

  return (
    <>
      <Box position="relative" {...containerStyle}>
        <SimpleGrid
          columns={{
            base: 1,
            lg: 2,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 24,
          }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              color="primary"
              lineHeight="shorter"
              letterSpacing="tight"
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              alignItems="center"
              justifyContent={{ base: "center", lg: "start" }}
              transition="all 1s"
            >
              <Icon
                as={icon}
                color="primary"
                boxSize={boxSize}
                // fontSize="18px"
                // borderWidth={{ base: 2, md: 0 }}
                // borderColor={{ base: "primary", md: "transparent" }}
                // borderRadius={{ base: "full", md: "initial" }}
                // padding={1.5}
                transition="all 1s"
                zIndex={1}
              />
              {` `}
              {title}
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              textAlign={{
                base: "center",
                lg: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.500",
              }}
            >
              {description}
            </chakra.p>
            <Wrap justify={{ base: "center", lg: "left" }}>
              <Button
                as="a"
                variant="solid"
                w={{
                  base: "full",
                  sm: "auto",
                }}
                colorScheme={colorScheme}
                size="lg"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Visit
              </Button>
              <Button
                as="a"
                variant="ghost"
                w={{
                  base: "full",
                  sm: "auto",
                }}
                colorScheme={colorScheme}
                size="lg"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Source
              </Button>
            </Wrap>
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            {features.map((feature, index) => (
              <Feature key={index}>{feature}</Feature>
            ))}
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default FeatureWithFeatureList;
