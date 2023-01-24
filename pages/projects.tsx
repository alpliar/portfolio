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
import { GiOpenedFoodCan, GiPeas, GiWatermelon } from "react-icons/gi";
import Feature from "../components/Feature";
import Features from "../layouts/Features";
import Link from "../components/Link";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import SingleFeature from "../layouts/SingleFeature";
import FeatureWithFeatureList from "../components/FeatureWithFeatureList";

type Props = {};
const ProjectsPage: React.FC<Props> = ({}) => {
  return (
    <>
      <Features
        columns={useBreakpointValue({ base: 1, sm: 2 })}
        title="Projects"
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit"
      >
        <FeatureWithFeatureList
          title="Cassegrain"
          description="Showcase website of French processed vegetables producer "
          features={[
            "NodeJS",
            "Nuxt",
            "SSG",
            "Vue",
            "Vuetify",
            "TypeScript",
            "Cypress",
          ]}
          icon={GiOpenedFoodCan}
          siteUrl="https://www.cassegrain.com"
        />
        <FeatureWithFeatureList
          title="Karpouzi"
          description="Grocery ecommerce webite "
          features={[
            "React",
            "Next.js",
            "GraphQL",
            "TypeScript",
            "Chakra UI",
            "Cypress",
            "SSR",
          ]}
          icon={GiWatermelon}
          siteUrl="https://karpouzi.vercel.app/"
          sourceUrl="https://github.com/alpliar/karpouzi/"
        />
      </Features>
    </>
  );
};

export default ProjectsPage;
