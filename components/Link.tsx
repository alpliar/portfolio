import { chakra, Link as UiLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { PropsWithChildren, ReactNode } from "react";

interface ILinkProps {
  children: ReactNode;
  href: string;
}

const Link: React.FC<ILinkProps> = ({ href, children }) => {
  return (
    <UiLink as={NextLink} href={href}>
      {children}
    </UiLink>
  );
};

export default chakra(Link);
