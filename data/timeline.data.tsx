import {
  FaLaptopHouse,
  FaLightbulb,
  FaLinkedin,
  FaMugHot,
  FaWalking,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { TbDeviceFloppy } from "react-icons/tb";
import { Timeline } from "../models/TimelineData.model";

const jobIcon = FaWalking;
const missionIcon = FaMugHot;
const schoolIcon = MdSchool;
const searchingIcon = FaLinkedin;
const remoteIcon = FaLaptopHouse;

const recentEventColor = "orange.800";
const playinColors = "yelow.500";
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
    company: "",
    technologies: ["Next.js", "React", "Typescript"],
    description:
      "Looking for a full remote frontend or fullstack developer position, European Union. I'm attached to following industries : social, culture, education, environment, solidarity, open-source.",
  },
  {
    logo: remoteIcon,
    isHighlight: true,
    color: playinColors,
    date: "since 2023",
    position: "Developing an online store with Next.js",
    company: "Playin, Paris, France (full-remote)",
    description:
      "Development from scratch of an online store, specialized in board games and trading card games",
    technologies: ["Typescript", "React", "Next.js", "GraphQL"],
  },
  {
    logo: jobIcon,
    isHighlight: true,
    color: extiaColors,
    date: "2020 to 2021",
    position: "Developing React & Vue websites",
    company: "Extia, Lille, France",
    description: "",
    // description: `
    // For Bonduelle Group, a French processed vegetables producer.
    // Development from scratch of a B2C showcase website + maintenance of Angular websites`,
    technologies: [
      "Typescript",
      "React",
      "Cypress",
      "Node.js",
      "Nuxt.js",
      "Vue.js",
      "Vuetify",
      "Angular",
      "Yup",
    ],
    steps: [
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2021",
        position: "Nuxt/Vue developer",
        company: "Bonduelle",
        description:
          "Wrote a showcase website for Bonduelle Group, a French processed vegetables producer. Also maintained Angular websites",
      },
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2021",
        position: "React Developer",
        company: "Extia Fablab",
        description:
          "Wrote a management app using React, Node, MongoDB, ChakraUI, for Extia FabLab",
      },
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2020",
        position: "Frontend engineer",
        company: "Camaïeu",
        description:
          "Did project management and continuous monitoring of website of French brand Camaïeu, specialised in ready-to-wear apparel.",
      },
    ],
  },
  {
    logo: FaLightbulb,
    color: hrTeamColors,
    date: "2020",
    position: "Catched-up on modern JavaScript frameworks",
    company: "",
    description: "",
    technologies: ["React", "Svelte", "Vue.js"],
  },
  {
    logo: FaLightbulb,
    color: extiaColors,
    date: "2020",
    position: "Catched-up on modern JavaScript environment",
    company: "",
    description: "",
    technologies: [
      "JavaScript",
      "ES6",
      "Visual code",
      "NPM",
      "Prettier",
      "ESLint",
    ],
  },
  {
    logo: jobIcon,
    isHighlight: true,
    color: hrTeamColors,
    date: "2018 to 2020",
    position: "Devops for retail websites",
    company: "HR Team, Lille, France",
    description: "",
    technologies: [
      "ES6",
      "C#",
      "PostgreSQL",
      "WebExtensions",
      "GTM",
      "TagCommander",
      "A/B Tasty",
      "Jira",
      "Confluence",
    ],
    steps: [
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2018 to 2020",
        position: "Technical project manager",
        company: "La Redoute",
        description:
          "Wrote JavaScript code, assumed project management and continuous monitoring of 11 websites, for the French brand La Redoute, specialised in ready-to-wear apparel and stylish home décor.",
      },
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2020",
        position: "Software engineer",
        company: "Leroy Merlin",
        description:
          "Project management and tier 3 support, for the leading doityourself company in Europe : Leroy Merlin",
      },
    ],
  },
  {
    logo: jobIcon,
    color: gfiColors,
    isHighlight: true,
    date: "2010 to 2018",
    position: "Developping and debugging of JS and native apps",
    company: "Gfi world, Lille, France",
    description: "",
    technologies: ["Jira", "Java", "JavaScript", "NSDK"],
    steps: [
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2014 to 2017",
        position: "Technical support engineer",
        company: "Decathlon",
        description:
          "Continuous monitoring of 13 websites, for Decathlon, the world's largest sporting goods retailer.",
        technologies: ["Jira", "Java", "JavaScript"],
      },
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2010 to 2014",
        position: "Software engineer",
        company: "BPCE Group",
        description:
          "Set-up of an outsourced service center for BPCE group, in order to handle maintenance of banking softwares",
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
    technologies: ["NDSK", "NatStar"],
    steps: [
      {
        logo: missionIcon,
        color: natSysColors,
        date: "2009",
        position: "Software engineer",
        company: "MAAF Assurances",
        description:
          "Wrote management softwares for MAAF Assurances insurance company",
      },
      {
        logo: missionIcon,
        color: natSysColors,
        date: "2008",
        position: "Software engineer",
        company: "Natixis Garanties",
        description:
          "Wrote management softwares for Natixis Garanties (BPCE Group)",
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
      "C++",
      "Java",
      "JavaScript",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "Visual Basic",
    ],
  },
  {
    logo: TbDeviceFloppy,
    color: studyColor,
    date: "before 2005",
    position: "Debut",
    company: "",
    description:
      "Fun fact, my very first time with code was BASIC language on Amstrad CPC 6128+ (released in 1990) and Texas Instruments TI83+ calculator.",
    technologies: ["Basic", "TI-Basic", "HTML", "CSS", "JavaScript"],
  },
];

export default timelineData;
