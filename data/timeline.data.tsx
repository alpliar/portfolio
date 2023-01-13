import { HiBadgeCheck, HiBookmark } from "react-icons/hi";
import { MdRunCircle, MdSchool } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Timeline } from "../models/TimelineData.model";

const jobIcon = HiBookmark;
const missionIcon = VscDebugBreakpointLog;
const schoolIcon = MdSchool;
const searchingIcon = MdRunCircle;

const recentEventColor = "green.300";
const jobColor = "orange.300";
const studyColor = "purple.300";

const timelineData: Timeline = [
  {
    logo: searchingIcon,
    color: recentEventColor,
    date: "Those days",
    title: "Looking for a frontend developer position",
    description: "Lyon, France",
  },
  {
    logo: jobIcon,
    color: jobColor,
    date: "2020 to 2021",
    title: "Extia",
    description: "1 year 1 month",
    steps: [
      {
        logo: missionIcon,
        color: jobColor,
        date: "2021",
        title: "Bonduelle Group",
        description: "Frontend Developer",
      },
      {
        logo: missionIcon,
        color: jobColor,
        date: "2021",
        title: "Extia",
        description: "Frontend Developer",
      },
      {
        logo: missionIcon,
        color: jobColor,
        date: "2020",
        title: "Camaïeu",
        description: "Frontend Developer",
      },
    ],
  },
  {
    logo: jobIcon,
    color: jobColor,
    date: "2018 to 2020",
    title: "HR Team",
    description: "3 years",
    steps: [
      {
        logo: missionIcon,
        color: jobColor,
        date: "2018 to 2020",
        title: "La Redoute",
        description: "Technical project manager",
      },
      {
        logo: missionIcon,
        color: jobColor,
        date: "2020",
        title: "Leroy Merlin / Adeo",
        description: "Software engineer",
      },
    ],
  },
  {
    logo: jobIcon,
    color: jobColor,
    date: "2010 to 2018",
    title: "Gfi world",
    description: "8 years 1 month",
    steps: [
      {
        logo: missionIcon,
        color: jobColor,
        date: "2014 to 2017",
        title: "Decathlon",
        description: "Technical support engineer",
      },
      {
        logo: missionIcon,
        color: jobColor,
        date: "2010 to 2014",
        title: "BPCE Group",
        description: "Software engineer",
      },
    ],
  },
  {
    logo: jobIcon,
    color: jobColor,
    date: "2008 to 2009",
    title: "Nat System",
    description: "1 year 6 months",
  },
  {
    logo: schoolIcon,
    color: studyColor,
    date: "2007",
    title: "Bachelor of Technology",
    description: "Université Paris Cité",
  },
];

export default timelineData;
