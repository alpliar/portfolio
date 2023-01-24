import { Tag, TagLabel, TagLeftIcon, Wrap } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FaTags } from "react-icons/fa";
import {
  SiChakraui,
  SiConfluence,
  SiCss3,
  SiCypress,
  SiDotnet,
  SiEslint,
  SiGoogletagmanager,
  SiHackthebox,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJira,
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
    case "GTM":
    case "Google Tag Manager":
      return SiGoogletagmanager;
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

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <Wrap>
      {/* <Text>Learned</Text> */}
      {technologies.map((tech, index) => (
        <Tag key={index} size="lg">
          <TagLeftIcon color="currentColor" boxSize={6} as={getIcon(tech)} />
          <TagLabel>{tech}</TagLabel>
        </Tag>
      ))}
    </Wrap>
  );
};

export default Technologies;
