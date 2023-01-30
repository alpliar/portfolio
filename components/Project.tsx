import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Project } from "../models/project.model";
import ProjectActions from "./ProjectActions";
import Technologies from "./Technologies";
interface ProjectProps {
  project: Project;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { title, icon, description, technologies } = project;
  return (
    <Card bgColor="surface" overflow="hidden">
      <CardBody>
        <Heading
          m={-5}
          p={5}
          bgColor="highlight"
          display="flex"
          gap={2}
          as="h2"
          color="primary"
        >
          <Icon as={icon} />

          {title}
        </Heading>
        <Flex
          direction="column"
          gap={{ base: 4, md: 8 }}
          mt={10}
          padding={{ md: 5 }}
          transition="all 0.2s"
        >
          <Text color="discrete">{description}</Text>
          <Box maxW={"lg"}>
            <Technologies
              justify="start"
              size={{ base: "md", xl: "lg" }}
              technologies={technologies}
            />
          </Box>
          <ProjectActions project={project} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Project;
