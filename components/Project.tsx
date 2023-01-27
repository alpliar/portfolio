import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Project } from "../models/project.model";
import Feature from "./Feature";
import ProjectActions from "./ProjectActions";
import Technologies from "./Technologies";
interface ProjectProps {
  project: Project;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { title, icon, description, technologies } = project;
  return (
    <Feature title={title} icon={icon}>
      <Stack spacing={4}>
        <Stack spacing={4} h={{ lg: 48, xl: 64 }} overflow="auto">
          <Text>{description}</Text>
          <Box maxW={"lg"}>
            <Technologies
              justify="start"
              size={{ base: "md", xl: "lg" }}
              technologies={technologies}
            />
          </Box>
        </Stack>
        <ProjectActions project={project} />
      </Stack>
    </Feature>
  );
};

export default Project;
