import { Box, Flex, Icon, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import HeaderLinks from "../layouts/HeaderLinks";
import { ColorModeToggle } from "./ColorModeToggle";
import Link from "./Link";

type Props = {};

const PageHeaderEnd = (props: Props) => {
  return (
    <>
      <HeaderLinks />
      <Flex align="center">
        <Flex as={Link} href="https://www.linkedin.com/in/alexandrepl/" gap={4}>
          <Icon color="primary" boxSize={6} as={FaLinkedin} />
          <VisuallyHidden>LinkedIn</VisuallyHidden>
        </Flex>
        <ColorModeToggle />
      </Flex>
    </>
  );
};

export default PageHeaderEnd;
