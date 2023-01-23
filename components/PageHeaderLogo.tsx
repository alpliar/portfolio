import { Avatar, Heading, HStack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const PageHeaderLogo: React.FC<Props> = ({}) => {
  // return <Heading>Portfolio</Heading>;
  return (
    <HStack>
      <Avatar src="/avatar.webp" />
      <Heading>Alexandre&apos;s portfolio</Heading>
    </HStack>
  );
};

export default PageHeaderLogo;
