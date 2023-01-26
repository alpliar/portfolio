import { FaRobot } from "react-icons/fa";
import {
  GiCrown,
  GiMicrophone,
  GiOpenedFoodCan,
  GiWatermelon,
} from "react-icons/gi";
import { Project } from "../models/project.model";

const projectsData: Project[] = [
  {
    title: "Cassegrain",
    url: "https://www.cassegrain.com",
    description: "Showcase website of French processed vegetables producer",
    icon: GiOpenedFoodCan,
    technologies: [
      "NodeJS",
      "Nuxt",
      "SSG",
      "Vue",
      "Vuetify",
      "TypeScript",
      "Cypress",
    ],
  },
  {
    title: "Karpouzi",
    url: "https://karpouzi.vercel.app",
    description: "Grocery ecommerce webite",
    icon: GiWatermelon,
    sourceUrl: "https://github.com/alpliar/karpouzi",
    technologies: [
      "React",
      "Next.js",
      "GraphQL",
      "TypeScript",
      "Chakra UI",
      "Cypress",
      "SSR",
    ],
  },
  {
    title: "Bored bot",
    url: "https://bored-bot-alpliar.vercel.app/",
    description:
      "BoredBot is a chatbot that helps you find something to do in case you're bored.",
    icon: FaRobot,
    sourceUrl: "https://github.com/alpliar/vivlio-frontend-challenge",
    technologies: ["React", "Redux", "Typescript", "Chakra UI"],
  },
  {
    title: "AR-lg",
    description:
      "AR-lg or Another Reign-Like game is a proof-of-concept of a decision-based game with cards",
    url: "https://another-reigns-like-game.vercel.app/game",
    sourceUrl: "https://github.com/alpliar/another-reigns-like-game",
    icon: GiCrown,
    technologies: [
      "React",
      "Framer motion",
      "Next",
      "OAuth",
      "Discord",
      "Hygraph",
      "Node",
      "Redux",
    ],
  },
  {
    title: "Karafun frontend case study (svelte)",
    url: "https://karafun-frontend-svelte-alpliar.vercel.app/",
    description: "Form interface written with Svelte",
    icon: GiMicrophone,
    sourceUrl: "https://github.com/alpliar/karafun-frontend-svelte",
    technologies: ["Svelte", "Svelte routing"],
  },
  {
    title: "Karafun frontend case study (react)",
    url: "https://karafun-frontend-case-study.vercel.app/",
    description: "Form interface written with React",
    icon: GiMicrophone,
    sourceUrl: "https://github.com/alpliar/karafun-frontend-case-study",
    technologies: ["NextJS", "React", "Typescript", "Chakra UI", "i18next"],
  },
];
export default projectsData;
