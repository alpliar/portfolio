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
import { FaCheck, FaCode, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import Technologies from "./Technologies";

interface FeatureWithFeatureListProps {
  description: string;
  features: string[];
  icon: IconType;
  title: string;
  siteUrl?: string;
  sourceUrl?: string;
}

const FeatureWithFeatureList: React.FC<FeatureWithFeatureListProps> = ({
  description,
  features,
  icon,
  title,
  siteUrl,
  sourceUrl,
}) => {
  const Feature = (props: TextProps) => {
    return (
      <Flex
        justifyContent={{
          base: "center",
          // lg: "left"
        }}
      >
        <Icon
          as={FaCode}
          color="primary"
          boxSize={{ base: 3, sm: 5 }}
          mt={1}
          mr={2}
          viewBox="0 0 20 20"
          fill="currentColor"
        />

        <Text
          fontSize={{ base: "sm", sm: "lg" }}
          transition="all 1s"
          //   color="gray.700"
          //   _dark={{
          //     color: "gray.400",
          //   }}
          {...props}
        />
      </Flex>
    );
  };

  const colorScheme = useColorModeValue("purple", "cyan");
  const boxSize = 12;

  const containerStyle: BoxProps = {
    _before: {
      backgroundColor: "pale",
      content: '""',
      display: "block",
      position: "absolute",
      right: 0,
      top: 0,
      transition: "all 1s",
      width: 0,
    },
    _dark: {
      _hover: {
        backgroundColor: "highlight",
      },
      backgroundColor: "surface",
    },
    _hover: {
      _before: {
        borderBottomColor: "primary",
        borderLeftColor: "primary",
      },
      backgroundColor: "highlight",
    },
    backgroundColor: "surface",
    mx: "auto",
    paddingX: 8,
    paddingY: 8,
    rounded: "lg",
    shadow: "xl",
    transition: "all 1s",
    width: "full",
  };

  return (
    <>
      <Flex position="relative" {...containerStyle}>
        <SimpleGrid
          columns={{
            base: 1,
            // lg: 2,
          }}
          spacingY={{
            base: 5,
            // lg: 32,
          }}
          spacingX={{
            base: 5,
            // lg: 24,
          }}
          flexGrow={1}
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
              //   justifyContent={{ base: "center", lg: "start" }}
              justifyContent="center"
              transition="all 1s"
            >
              {title}
            </chakra.h2>
            {/* <Box textAlign="center">
              <Icon
                // position="absolute"
                // top={0}
                // left={0}
                as={icon}
                color="secondary"
                _hover={{
                  color: "primary",
                }}
                boxSize={{ base: 32 }}
                // fontSize="18px"
                // borderWidth={{ base: 2, md: 0 }}
                // borderColor={{ base: "primary", md: "transparent" }}
                // borderRadius={{ base: "full", md: "initial" }}
                // padding={1.5}
                mr={{ sm: 2 }}
                transition="all 1s"
              />
            </Box> */}

            <chakra.p
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              minH={{ md: "3em" }}
              textAlign={{
                base: "center",
                // lg: "left",
              }}
              //   color="gray.600"
              //   _dark={{
              //     color: "gray.500",
              //   }}
            >
              {description}
            </chakra.p>
          </Box>
          <Wrap
            justify={{
              base: "center",
              //   lg: "left"
            }}
          >
            {siteUrl && (
              <Button
                as="a"
                href={siteUrl}
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
                leftIcon={
                  <Icon
                    as={icon}
                    // p={2}
                    boxSize={10}
                    // position="absolute"
                    // left={1}
                    // top={"calc(50% - var(--chakra-sizes-12) / 2)"}
                    // transform={"scale(150%) rotate(-15deg)"}
                  />
                }
              >
                Visit
              </Button>
            )}
            {sourceUrl && (
              <Button
                as="a"
                href={sourceUrl}
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
                leftIcon={
                  <Icon
                    as={FaGithub}
                    // p={2}
                    boxSize={5}
                    // position="absolute"
                    // left={1}
                    // top={"calc(50% - var(--chakra-sizes-12) / 2)"}
                    // transform={"scale(150%) rotate(-15deg)"}
                  />
                }
              >
                Source
              </Button>
            )}
          </Wrap>
          <Technologies technologies={features} />
          {/* <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            flexGrow={1}
            spacing={5}
            alignItems="end"
            justifyItems="start"
            mt={{ lg: 2 }}
            margin="auto"
          >
            {features.map((feature, index) => (
              <Feature key={index}>{feature}</Feature>
            ))}
          </SimpleGrid> */}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default FeatureWithFeatureList;
