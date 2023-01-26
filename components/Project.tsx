import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { Project } from "../models/project.model";
import Feature from "./Feature";
import Link from "./Link";
import ProjectActions from "./ProjectActions";
import Technologies, { TechnologiesProps } from "./Technologies";
interface ProjectProps {
  project: Project;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { title, icon, description, technologies, url, sourceUrl } = project;
  return (
    <Feature title={title} icon={icon}>
      <Stack spacing={4}>
        <Text h={12}>{description}</Text>
        <Box h={{ md: 28 }} overflowY="auto">
          <Technologies technologies={technologies} />
        </Box>
        <ProjectActions project={project} />
      </Stack>
    </Feature>
  );
};

export default Project;
