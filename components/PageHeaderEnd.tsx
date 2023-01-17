import React from "react";
import HeaderLinks from "../layouts/HeaderLinks";
import { ColorModeToggle } from "./ColorModeToggle";

type Props = {};

const PageHeaderEnd = (props: Props) => {
  return (
    <>
      <HeaderLinks />
      <ColorModeToggle />
    </>
  );
};

export default PageHeaderEnd;
