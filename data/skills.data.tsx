import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";
import { Skill } from "../models/skill.model";

export const skillsData: Skill[] = [
  {
    title: "Typescript",
    icon: SiTypescript,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident quae autem esse inventore assumenda ad maiores ipsum amet dicta? Architecto, facere veniam! Officia, veritatis nesciunt. Pariatur nostrum ad illo?",
    highlights: [],
  },
  {
    title: "React",
    icon: SiReact,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eos ullam ducimus culpa quas eum eius, consequatur asperiores voluptatem, labore et esse deleniti, hic sint facere. Laborum libero a nam!",
    highlights: ["Hooks", "Redux"],
  },
  {
    title: "Next.JS",
    icon: SiNextdotjs,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eos ullam ducimus culpa quas eum eius, consequatur asperiores voluptatem, labore et esse deleniti, hic sint facere. Laborum libero a nam!",
    highlights: [],
  },
  {
    title: "Nuxt.JS",
    icon: SiNuxtdotjs,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eos ullam ducimus culpa quas eum eius, consequatur asperiores voluptatem, labore et esse deleniti, hic sint facere. Laborum libero a nam!",
    highlights: [],
  },
  {
    title: "Svelte",
    icon: SiSvelte,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eos ullam ducimus culpa quas eum eius, consequatur asperiores voluptatem, labore et esse deleniti, hic sint facere. Laborum libero a nam!",
    highlights: [],
  },
];
