import { Avatar, Heading, HStack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const PageHeaderLogo: React.FC<Props> = ({}) => {
  // return <Heading>Portfolio</Heading>;
  return (
    <HStack>
      <Avatar src="/avatar.webp" />
      <Heading as="p">Portfolio</Heading>
    </HStack>
  );
};

export default PageHeaderLogo;
