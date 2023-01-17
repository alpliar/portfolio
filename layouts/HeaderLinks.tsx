import { Wrap, WrapItem } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Link from "../components/Link";

type Props = {};

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => (
  <WrapItem as={Link} href={href}>
    {children}
  </WrapItem>
);

const HeaderLinks = ({}) => {
  return (
    <Wrap>
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/skills">Skills</HeaderLink>
      <HeaderLink href="/projects">Projects</HeaderLink>
      <HeaderLink href="/timeline">Timeline</HeaderLink>
      <HeaderLink href="/">Socials</HeaderLink>
    </Wrap>
  );
};

export default HeaderLinks;
