import { GiOpenedFoodCan, GiWatermelon } from "react-icons/gi";
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
];
export default projectsData;
