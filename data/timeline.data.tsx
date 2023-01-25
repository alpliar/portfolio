import {
  FaLightbulb,
  FaLinkedin,
  FaMugHot,
  FaTags,
  FaWalking,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import {
  SiConfluence,
  SiCplusplus,
  SiCss3,
  SiDotnet,
  SiEslint,
  SiGoogletagmanager,
  SiHackthebox,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJira,
  SiNpm,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiPrettier,
  SiReact,
  SiSvelte,
  SiTypescript,
  SiVisualstudiocode,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";
import { TbDeviceFloppy } from "react-icons/tb";
import { Timeline } from "../models/TimelineData.model";

const jobIcon = FaWalking;
const missionIcon = FaMugHot;
const schoolIcon = MdSchool;
const searchingIcon = FaLinkedin;

const recentEventColor = "orange.800";
const extiaColors = "orange.700";
const hrTeamColors = "orange.600";
const gfiColors = "orange.500";
const natSysColors = "orange.400";
const studyColor = "orange.300";

const timelineData: Timeline = [
  {
    logo: searchingIcon,
    color: recentEventColor,
    date: "Today",
    position: "Looking for opportunities",
    company: "Pole emploi",
    technologies: [
      { label: "React" },
      { label: "Node" },
      { label: "Typescript" },
    ],
    description:
      "Direct-relation, part-time or full time. Industry : social, culture, education, environment, solidarity, open-source. Technical stack : React, Next.js, Node.js, TypeScript",
  },
  {
    logo: jobIcon,
    color: extiaColors,
    date: "2020 to 2021",
    position: "Developing React & Vue websites",
    company: "Extia, Lille, France",
    description: "Learned TypeScript, Angular, Nuxt",
    technologies: [
      { label: "Nuxt.js", icon: SiNuxtdotjs },
      { label: "Vue.js", icon: SiVuedotjs },
      { label: "React", icon: SiReact },
      { label: "Vuetify", icon: SiVuetify },
      { label: "Typescript", icon: SiTypescript },
    ],
    steps: [
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2021",
        position: "Nuxt/Vue developer",
        company: "Bonduelle",
        description: "",
      },
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2021",
        position: "React Developer",
        company: "Extia",
        description: "",
      },
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2020",
        position: "Frontend engineer",
        company: "Camaïeu",
        description: "",
      },
    ],
  },
  {
    logo: FaLightbulb,
    color: hrTeamColors,
    date: "2020",
    position: "Catched-up with latest techs",
    company: "wfh",
    description: "",
    technologies: [
      { label: "Visual code", icon: SiVisualstudiocode },
      { label: "React", icon: SiReact },
      { label: "Svelte", icon: SiSvelte },
      { label: "Vue.js", icon: SiVuedotjs },
      { label: "ES6", icon: SiJavascript },
      { label: "NPM", icon: SiNpm },
      { label: "Prettier", icon: SiPrettier },
      { label: "ESLint", icon: SiEslint },
    ],
  },
  {
    logo: jobIcon,
    color: hrTeamColors,
    date: "2018 to 2020",
    position: "Devops for retail websites",
    company: "HR Team, Lille, France",
    description: "",
    technologies: [
      { label: "ES6", icon: SiJavascript },
      { label: "Confluence", icon: SiConfluence },
      { label: ".net", icon: SiDotnet },
      { label: "Jira", icon: SiJira },
      { label: "Confluence", icon: SiConfluence },
      { label: "GTM", icon: SiGoogletagmanager },
      { label: "TagCommander", icon: FaTags },
    ],
    steps: [
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2018 to 2020",
        position: "Technical project manager",
        company: "La Redoute",
        description: "",
        technologies: [{ label: "PostgreSQL", icon: SiPostgresql }],
      },
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2020",
        position: "Software engineer",
        company: "Leroy Merlin",
        description: "",
      },
    ],
  },
  {
    logo: jobIcon,
    color: gfiColors,
    date: "2010 to 2018",
    position: "Developping and debugging of JS and native apps",
    company: "Gfi world, Lille, France",
    description: "",
    technologies: [
      { label: "Jira", icon: SiJira },
      { label: "Java", icon: SiJava },
      { label: "JavaScript", icon: SiJavascript },
      { label: "NSDK", icon: SiHackthebox },
    ],
    steps: [
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2014 to 2017",
        position: "Technical support engineer",
        company: "Decathlon",
        description: "",
        technologies: [
          { label: "Jira", icon: SiJira },
          { label: "Java", icon: SiJava },
          { label: "JavaScript", icon: SiJavascript },
        ],
      },
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2010 to 2014",
        position: "Software engineer",
        company: "BPCE Group",
        description: "",
      },
    ],
  },
  {
    logo: jobIcon,
    color: natSysColors,
    date: "2008 to 2009",
    position: "Developing management software for banks & insurances",
    company: "Nat System, Paris, France",
    description: "",
    technologies: [
      { label: "NSDK", icon: SiHackthebox },
      { label: "NatStar", icon: SiHackthebox },
    ],
    steps: [
      {
        logo: missionIcon,
        color: natSysColors,
        date: "2009",
        position: "Software engineer",
        company: "MAAF Assurances",
        description: "",
      },
      {
        logo: missionIcon,
        color: natSysColors,
        date: "2008",
        position: "Software engineer",
        company: "BPCE Group / Natixis Garanties",
        description: "",
      },
    ],
  },
  {
    logo: schoolIcon,
    color: studyColor,
    date: "2007",
    position: "Bachelor of Technology",
    company: "Université Paris Cité, Champs-sur-Marne, France",
    description: "",
    technologies: [
      { label: "C++", icon: SiCplusplus },
      { label: "Java", icon: SiJava },
      { label: "JavaScript", icon: SiJavascript },
      { label: "PHP", icon: SiPhp },
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss3 },
    ],
  },
  {
    logo: TbDeviceFloppy,
    color: studyColor,
    date: "before 2005",
    position: "Debut",
    company: "Amstrad CPC 6128+",
    description: "...",
    technologies: [{ label: "Basic" }],
  },
];

export default timelineData;
