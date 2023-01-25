import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  chakra,
  Flex,
  Icon,
  Stack,
  Text,
  TextProps,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";
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
          {...props}
        />
      </Flex>
    );
  };

  const colorScheme = useColorModeValue("purple", "cyan");

  const containerStyle: BoxProps = {
    _dark: {
      _hover: {
        backgroundColor: "highlight",
      },
      backgroundColor: "surface",
    },
    _hover: {
      backgroundColor: "highlight",
    },
    mx: "auto",
    rounded: "lg",
    shadow: "xl",
    transition: "all 1s",
    width: "full",
    overflow: "hidden",
  };

  return (
    <>
      <Card {...containerStyle}>
        <CardBody>
          <Stack direction="column" spacing={5}>
            <chakra.h2
              margin="calc(var(--card-padding) * -1)"
              height={32}
              backgroundColor="secondary"
              mb={3}
              fontSize={{
                base: "3xl",
              }}
              fontWeight="extrabold"
              color="primary"
              lineHeight="shorter"
              letterSpacing="tight"
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              alignItems="center"
              justifyContent="center"
              transition="all 1s"
            >
              {title}
            </chakra.h2>
            <chakra.p
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              height={{ md: 24 }}
              textAlign={{
                base: "center",
              }}
            >
              {description}
            </chakra.p>

            <Box height={{ md: 44 }} overflow="auto">
              <Technologies technologies={features} />
            </Box>

            <ButtonGroup justifyContent="end">
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
                  leftIcon={<Icon as={FaGithub} boxSize={5} />}
                >
                  Source
                </Button>
              )}
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
                  leftIcon={<Icon as={icon} boxSize={10} />}
                >
                  Visit
                </Button>
              )}
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default FeatureWithFeatureList;
