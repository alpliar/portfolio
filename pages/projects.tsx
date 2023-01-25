import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { GiOpenedFoodCan, GiWatermelon } from "react-icons/gi";
import FeatureWithFeatureList from "../components/FeatureWithFeatureList";
import Features from "../layouts/Features";

type Props = {};
const ProjectsPage: React.FC<Props> = ({}) => {
  return (
    <>
      <Features
        columns={useBreakpointValue({ base: 1, md: 2 })}
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
