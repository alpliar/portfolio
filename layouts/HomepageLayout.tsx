import { Center, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { ColorModeToggle } from "../components/ColorModeToggle";
import Timeline from "../components/Timeline";
import Header from "./Header";

type Props = { children: ReactNode };

const HomepageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header end={<ColorModeToggle />} />
      <Center minH="lg" p={{ base: 4 }}>
        <Stack spacing={8}>{children}</Stack>
      </Center>
    </>
  );
};

export default HomepageLayout;
