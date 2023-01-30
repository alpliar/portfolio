import {
  Box,
  Flex,
  SimpleGrid,
  Tag,
  Text,
  useColorMode,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import Feature from "../components/Feature";
import { skillsData } from "../data/skills.data";
import PageLayout from "../layouts/PageLayout";

type Props = {};
const SkillsPage: React.FC<Props> = ({}) => {
  const colorScheme = useColorModeValue("purple", "cyan");

  return (
    <PageLayout
      title="Skills"
      subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit"
    >
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={8}>
        {skillsData.map((skill, sIndex) => {
          const { title, icon, text, highlights } = skill;
          return (
            <Feature key={sIndex} title={title} icon={icon}>
              {text && <Text>{text}</Text>}
              {highlights && (
                <Flex wrap="wrap" gap={2} mt="auto">
                  {highlights.map((highlight, hIndex) => (
                    <Tag key={hIndex} colorScheme={colorScheme}>
                      {highlight}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Feature>
          );
        })}
      </SimpleGrid>
    </PageLayout>
  );
};

export default SkillsPage;
