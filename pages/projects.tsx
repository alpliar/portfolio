import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { GiOpenedFoodCan, GiWatermelon } from "react-icons/gi";
import Feature from "../components/Feature";
import FeatureWithFeatureList from "../components/FeatureWithFeatureList";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import projectsData from "../data/projects.data";
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
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {projectsData.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </SimpleGrid>
      </PageLayout>
    </>
  );
};

export default ProjectsPage;
