import {
  Badge,
  Flex,
  Icon,
  useColorModeValue,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import Link from "../components/Link";

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => (
  <WrapItem>
    <Badge fontSize="md" colorScheme={useColorModeValue("purple", "cyan")}>
      <Link href={href}>{children}</Link>
    </Badge>
  </WrapItem>
);

const HeaderLinks = ({}) => {
  return (
    <Wrap>
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/skills">Skills</HeaderLink>
      <HeaderLink href="/projects">Projects</HeaderLink>
      <HeaderLink href="/experience">Experience</HeaderLink>
      <Flex as={Link} href="https://www.linkedin.com/in/alexandrepl/">
        <Icon as={FaLinkedin} />
        <VisuallyHidden>LinkedIn</VisuallyHidden>
      </Flex>
    </Wrap>
  );
};

export default HeaderLinks;
