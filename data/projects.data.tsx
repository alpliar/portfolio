import { FaRobot } from "react-icons/fa";
import {
  GiMechanicGarage,
  GiModernCity,
  GiOpenedFoodCan,
  GiPlatform,
  GiWatermelon,
} from "react-icons/gi";
import { SiSuperuser } from "react-icons/si";
import { Project } from "../models/project.model";

const projectsData: Project[] = [
  {
    title: "RPG experiment",
    sourceUrl: "https://github.com/alpliar/rpg-experiment",
    url: "https://rpg-experiment-alpliar.vercel.app/",
    icon: GiPlatform,
    technologies: ["TypeScript", "Canvas", "Pixel-art"],
    description: "A role-playing-game running in browser",
  },
  {
    title: "3D City Builder",
    sourceUrl: "https://github.com/alpliar/city-builder",
    url: "https://city-builder-alpliar.vercel.app/",
    icon: GiModernCity,
    technologies: ["Svelte", "Three.js", "Typescript"],
    description: "A 3D city builder running in browser",
  },
  {
    title: "Portfolio",
    // url: "https://alpliar.vercel.app/",
    sourceUrl: "https://github.com/alpliar/portfolio",
    description:
      "Portfolio of some websites and web applications I have had the opportunity to work on.",
    icon: SiSuperuser,
    technologies: ["Next.js", "React", "Typescript", "Chakra UI", "SSG"],
  },
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
  // {
  //   title: "AR-lg",
  //   description:
  //     "AR-lg or Another Reign-Like game is a proof-of-concept of a decision-based game with cards",
  //   url: "https://another-reigns-like-game.vercel.app/game",
  //   sourceUrl: "https://github.com/alpliar/another-reigns-like-game",
  //   icon: GiCrown,
  //   technologies: [
  //     "React",
  //     "Framer motion",
  //     "Next",
  //     "OAuth",
  //     "Discord",
  //     "Hygraph",
  //     "Node",
  //     "Redux",
  //   ],
  // },
  // {
  //   title: "Karafun frontend case study (svelte)",
  //   url: "https://karafun-frontend-svelte-alpliar.vercel.app/",
  //   description: "Form interface written with Svelte",
  //   icon: GiMicrophone,
  //   sourceUrl: "https://github.com/alpliar/karafun-frontend-svelte",
  //   technologies: ["Svelte", "Svelte routing"],
  // },
  // {
  //   title: "Karafun frontend case study (react)",
  //   url: "https://karafun-frontend-case-study.vercel.app/",
  //   description: "Form interface written with React",
  //   icon: GiMicrophone,
  //   sourceUrl: "https://github.com/alpliar/karafun-frontend-case-study",
  //   technologies: ["NextJS", "React", "Typescript", "Chakra UI", "i18next"],
  // },
  {
    title: "Garage API",
    sourceUrl: "https://github.com/alpliar/garage-api",
    icon: GiMechanicGarage,
    technologies: ["JavaScript", "Node.js", "GraphQL", "MongoDB", "Faker"],
    description: "A GraphQL garage management API",
  },
];
export default projectsData;
