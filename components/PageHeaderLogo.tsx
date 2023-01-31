import { Box, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import avatar from "../assets/avatar.webp";

type Props = {};

const PageHeaderLogo: React.FC<Props> = ({}) => {
  return (
    <HStack>
      <Box rounded="full">
        <Image
          src={avatar}
          alt="avatar of the author"
          // priority
          // width={72}
          // height={72}
        />
      </Box>
      {/* <Avatar src={avatar.src} /> */}
      <Heading as="p">{`Alexandre's Portfolio`}</Heading>
    </HStack>
  );
};

export default PageHeaderLogo;
