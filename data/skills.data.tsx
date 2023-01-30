import {
  SiCss3,
  SiGimp,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiReact,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";
import { Skill } from "../models/skill.model";

export const skillsData: Skill[] = [
  {
    title: "HTML",
    icon: SiHtml5,
    text: "Since 2005. Solid experience with HTML conception",
    highlights: ["Metadata", "Semantic", "Accessibility"],
  },
  {
    title: "CSS",
    icon: SiCss3,
    text: "Since 2005. Strong experience with CSS stylesheets",
    highlights: ["Mobile-first", "Universal design"],
  },
  {
    title: "Typescript",
    icon: SiTypescript,
    text: "Since 2021. Strong appetence for typed code.",
    // highlights: [],
  },
  {
    title: "React",
    icon: SiReact,
    text: "Since 2020. Solid experience in conceiving reusable components, with high level of abstraction.",
    highlights: ["Hooks", "Redux", "i18n"],
  },
  {
    title: "Next.JS",
    icon: SiNextdotjs,
    text: "Since 2020",
    highlights: ["SSR", "SSG", "i18n"],
  },
  {
    title: "Nuxt.JS",
    icon: SiNuxtdotjs,
    text: "Since 2021. One year professional experience",
    highlights: ["SSR", "SSG", "SEO", "i18n"],
  },
  {
    title: "Svelte",
    icon: SiSvelte,
    text: "Since 2020",
    highlights: ["SvelteKit"],
  },
  {
    title: "Node.JS",
    icon: SiNodedotjs,
    text: "",
  },
  {
    title: "The Gimp",
    icon: SiGimp,
    text: "",
  },
];
