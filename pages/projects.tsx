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
import { Box, Text } from "@chakra-ui/react";
import SingleFeature from "../layouts/SingleFeature";
import FeatureWithFeatureList from "../components/FeatureWithFeatureList";

type Props = {};
const ProjectsPage: React.FC<Props> = ({}) => {
  return (
    <>
      <Features
        columns={1}
        title="Projects"
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit"
      >
        <FeatureWithFeatureList
          title="Cassegrain"
          description="Loremp ipsumfoazifo izajfoiza "
          features={[
            "NodeJS",
            "Nuxt",
            "SSG",
            "Vue",
            "Vuetify",
            "Axios",
            "TypeScript",
            "Cypress",
          ]}
          icon={GiPeas}
        />
        <FeatureWithFeatureList
          title="Karpouzi"
          description="Grocery ecommerce webite "
          features={["React", "Next.js", "TypeScript", "Chakra UI", "Cypress"]}
          icon={GiWatermelon}
        />
      </Features>
    </>
  );
};

export default ProjectsPage;
