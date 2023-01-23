import React from "react";
import {
  SiChatbot,
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiRedux,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";
import { GiPeas, GiWatermelon } from "react-icons/gi";
import Feature from "../components/Feature";
import Features from "../layouts/Features";
import Link from "../components/Link";
import { Box } from "@chakra-ui/react";

type Props = {};
const ProjectsPage: React.FC<Props> = ({}) => {
  return (
    <Features
      title="Projects"
      subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit"
    >
      <Feature title="Karpouzi" icon={GiWatermelon}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>

      <Feature title="Bored bot" icon={SiChatbot}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>

      <Feature title="cassegrain.com" icon={GiPeas}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
        {` `}
        <Link isExternal href="https://cassegrain.com/">
          Go to cassegrain.com
        </Link>
      </Feature>
    </Features>
  );
};

export default ProjectsPage;
