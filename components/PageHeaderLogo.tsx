import { Avatar, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import avatar from "../assets/avatar.webp";

type Props = {};

const PageHeaderLogo: React.FC<Props> = ({}) => {
  return (
    <HStack>
      <Image
        src={avatar.src}
        alt="avatar of the author"
        width={avatar.width / 4}
        height={avatar.height / 4}
      />
      {/* <Avatar src={avatar.src} /> */}
      <Heading as="p">{`Alexandre's Portfolio`}</Heading>
    </HStack>
  );
};

export default PageHeaderLogo;
