import { FaLightbulb, FaLinkedin, FaMugHot, FaWalking } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
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
    technologies: ["React", "Node", "Typescript"],
    description:
      "Direct-relation, part-time or full time. Industry : social, culture, education, environment, solidarity, open-source. Technical stack : React, Next.js, Node.js, TypeScript",
  },
  {
    logo: jobIcon,
    isHighlight: true,
    color: extiaColors,
    date: "2020 to 2021",
    position: "Developing React & Vue websites",
    company: "Extia, Lille, France",
    description: "Learned TypeScript, Angular, Nuxt",
    technologies: [
      "Nuxt.js",
      "Vue.js",
      "React",
      "Vuetify",
      "Typescript",
      "Angular",
      "Cypress",
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo et earum eligendi molestiae ratione saepe nesciunt, laboriosam illo maxime aperiam ea, dolorum repellendus animi, obcaecati hic? Odit, nostrum iste.",
    technologies: [
      "Visual code",
      "React",
      "Svelte",
      "Vue.js",
      "ES6",
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo et earum eligendi molestiae ratione saepe nesciunt, laboriosam illo maxime aperiam ea, dolorum repellendus animi, obcaecati hic? Odit, nostrum iste.",

    technologies: [
      "ES6",
      "Confluence",
      ".net",
      "Jira",
      "Confluence",
      "GTM",
      "TagCommander",
    ],
    steps: [
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2018 to 2020",
        position: "Technical project manager",
        company: "La Redoute",
        description: "",
        technologies: ["PostgreSQL"],
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
    isHighlight: true,
    date: "2010 to 2018",
    position: "Developping and debugging of JS and native apps",
    company: "Gfi world, Lille, France",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo et earum eligendi molestiae ratione saepe nesciunt, laboriosam illo maxime aperiam ea, dolorum repellendus animi, obcaecati hic? Odit, nostrum iste.",
    technologies: ["Jira", "Java", "JavaScript", "NSDK"],
    steps: [
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2014 to 2017",
        position: "Technical support engineer",
        company: "Decathlon",
        description: "",
        technologies: ["Jira", "Java", "JavaScript"],
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo et earum eligendi molestiae ratione saepe nesciunt, laboriosam illo maxime aperiam ea, dolorum repellendus animi, obcaecati hic? Odit, nostrum iste.",

    technologies: ["NDSK", "NatStar"],
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo et earum eligendi molestiae ratione saepe nesciunt, laboriosam illo maxime aperiam ea, dolorum repellendus animi, obcaecati hic? Odit, nostrum iste.",
    technologies: [
      "C++",
      "Java",
      "JavaScript",
      "PHP",
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
    company: "Amstrad CPC 6128+",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo et earum eligendi molestiae ratione saepe nesciunt, laboriosam illo maxime aperiam ea, dolorum repellendus animi, obcaecati hic? Odit, nostrum iste.",
    technologies: ["Basic", "HTML", "CSS", "JavaScript"],
  },
];

export default timelineData;
