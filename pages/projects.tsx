import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { GiOpenedFoodCan, GiWatermelon } from "react-icons/gi";
import Feature from "../components/Feature";
import FeatureWithFeatureList from "../components/FeatureWithFeatureList";
import Technologies from "../components/Technologies";
import Features from "../layouts/Features";
import PageLayout from "../layouts/PageLayout";

type Props = {};
const ProjectsPage: React.FC<Props> = ({}) => {
  return (
    <>
      <PageLayout
        title="Projects"
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Feature title="Cassegrain" icon={GiOpenedFoodCan}>
            Showcase website of French processed vegetables producer
            <Technologies
              technologies={[
                "NodeJS",
                "Nuxt",
                "SSG",
                "Vue",
                "Vuetify",
                "TypeScript",
                "Cypress",
              ]}
            />
          </Feature>
          <Feature title="Karpouzi" icon={GiWatermelon}>
            Grocery ecommerce webite
            <Technologies
              technologies={[
                "React",
                "Next.js",
                "GraphQL",
                "TypeScript",
                "Chakra UI",
                "Cypress",
                "SSR",
              ]}
            />
          </Feature>
          {/* <FeatureWithFeatureList
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
          /> */}
        </SimpleGrid>
      </PageLayout>
    </>
  );
};

export default ProjectsPage;
