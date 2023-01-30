import { Button, ButtonGroup, Icon, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../models/project.model";

interface ProjectActionsProps {
  project: Project;
}

const ProjectActions: React.FC<ProjectActionsProps> = ({ project }) => {
  const colorScheme = useColorModeValue("purple", "cyan");
  const { sourceUrl, url, icon } = project;
  return (
    <ButtonGroup>
      {sourceUrl && (
        <Button
          as="a"
          href={sourceUrl}
          variant="ghost"
          w={{
            base: "full",
            sm: "auto",
          }}
          colorScheme={colorScheme}
          size="md"
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
          leftIcon={<Icon as={FaGithub} />}
        >
          Source
        </Button>
      )}
      {url && (
        <Button
          as="a"
          href={url}
          variant="solid"
          w={{
            base: "full",
            sm: "auto",
          }}
          colorScheme={colorScheme}
          size="md"
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
          leftIcon={<Icon as={icon} />}
        >
          Visit
        </Button>
      )}
    </ButtonGroup>
  );
};

export default ProjectActions;
