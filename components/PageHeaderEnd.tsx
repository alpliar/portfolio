import { Flex, Icon, VisuallyHidden } from "@chakra-ui/react";
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
          <Icon color="primary" boxSize={8} p={1} as={FaLinkedin} />
          <VisuallyHidden>LinkedIn</VisuallyHidden>
        </Flex>
        <ColorModeToggle />
      </Flex>
    </>
  );
};

export default PageHeaderEnd;
