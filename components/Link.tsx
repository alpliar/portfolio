import { chakra, Icon, Link as UiLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ILinkProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
  variant?: LinkProps["variant"];
}

const Link: React.FC<ILinkProps> = ({
  href,
  children,
  isExternal = false,
  variant = undefined,
}) => {
  return (
    <>
      <UiLink
        as={NextLink}
        href={href}
        isExternal={isExternal}
        variant={variant}
        display="flex"
        alignItems="center"
      >
        {children}
        {` `}
        {isExternal && <Icon boxSize="0.75em" as={FaExternalLinkAlt} />}
      </UiLink>
    </>
  );
};

export default chakra(Link);
