import { Badge, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Link from "../components/Link";

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => (
  <WrapItem>
    <Badge
      fontSize={{ base: "xl", lg: "md" }}
      colorScheme={useColorModeValue("purple", "cyan")}
    >
      <Link href={href}>{children}</Link>
    </Badge>
  </WrapItem>
);

const HeaderLinks = ({}) => {
  return (
    <Wrap justify={{ base: "center", md: "start" }}>
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/skills">Skills</HeaderLink>
      <HeaderLink href="/projects">Projects</HeaderLink>
      <HeaderLink href="/experience">Experience</HeaderLink>
    </Wrap>
  );
};

export default HeaderLinks;
