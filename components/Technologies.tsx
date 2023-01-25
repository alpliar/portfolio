import { Tag, TagLabel, TagLeftIcon, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FaTags } from "react-icons/fa";
import {
  SiChakraui,
  SiConfluence,
  SiCplusplus,
  SiCss3,
  SiCypress,
  SiDotnet,
  SiEslint,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGraphql,
  SiHackthebox,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJira,
  SiLua,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiNuxtdotjs,
  SiPhp,
  SiPrettier,
  SiPython,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiSvelte,
  SiTypescript,
  SiVisualstudiocode,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";
import { Technology } from "../models/TimelineData.model";

interface TechnologiesProps {
  technologies: Technology["label"][];
}

const getIcon = (label: string): IconType => {
  switch (label) {
    case "Visual code":
      return SiVisualstudiocode;
    case "Vue":
    case "Vue.js":
      return SiVuedotjs;
    case "Vuetify":
      return SiVuetify;
    case "Nuxt":
    case "Nuxt.js":
      return SiNuxtdotjs;
    case "NPM":
      return SiNpm;
    case "C++":
      return SiCplusplus;
    case "Node.js":
    case "NodeJS":
    case "Node":
      return SiNodedotjs;
    case "Prettier":
      return SiPrettier;
    case "ESLint":
      return SiEslint;
    case "Next":
    case "Next.js":
    case "NextJS":
      return SiNextdotjs;
    case "Chakra UI":
      return SiChakraui;
    case "React":
      return SiReact;
    case "Svelte":
      return SiSvelte;
    case "Confluence":
      return SiConfluence;
    case "Jira":
      return SiJira;
    case "PHP":
      return SiPhp;
    case "HTML":
      return SiHtml5;
    case "CSS":
      return SiCss3;
    case "Java":
      return SiJava;
    case "Cypress":
      return SiCypress;
    case "Typescript":
    case "TypeScript":
      return SiTypescript;
    case "JavaScript":
    case "ES6":
      return SiJavascript;
    case "Dotnet":
    case ".net":
      return SiDotnet;
    case "GraphQL":
      return SiGraphql;
    case "Lua":
      return SiLua;
    case "GTM":
    case "Google Tag Manager":
      return SiGoogletagmanager;
    case "Google Analytics":
      return SiGoogleanalytics;
    case "TagCommander":
    case "Commander's Act":
      return FaTags;
    case "Pyton":
      return SiPython;
    case "Ruby":
      return SiRuby;
    case "Rails":
    case "Ruby on rails":
      return SiRubyonrails;
    default:
      return SiHackthebox;
  }
};

interface TechnologyProps {
  label: Technology["label"];
}

const Technology: React.FC<TechnologyProps> = ({ label }) => {
  return (
    <Tag size={{ base: "md", md: "lg" }}>
      <TagLeftIcon color="currentColor" boxSize={6} as={getIcon(label)} />
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <Wrap justify={{ base: "left", md: "center", lg: "left" }}>
      {/* <Text>Learned</Text> */}
      {technologies.map((tech, index) => (
        <WrapItem key={index}>
          <Technology label={tech} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Technologies;
