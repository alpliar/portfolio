import { HiBookmark } from "react-icons/hi";
import { MdDownloading, MdSchool } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Timeline } from "../models/TimelineData.model";

const jobIcon = HiBookmark;
const missionIcon = VscDebugBreakpointLog;
const schoolIcon = MdSchool;
const searchingIcon = MdDownloading;

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
    date: "Those days",
    title: "Looking for opportunities",
    description: "Lyon, France",
  },
  {
    logo: jobIcon,
    color: extiaColors,
    date: "2020 to 2021",
    title: "Extia",
    description: "1 year 1 month",
    steps: [
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2021",
        title: "Bonduelle Group",
        description: "Frontend Developer",
      },
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2021",
        title: "Extia",
        description: "Frontend Developer",
      },
      {
        logo: missionIcon,
        color: extiaColors,
        date: "2020",
        title: "Camaïeu",
        description: "Frontend Developer",
      },
    ],
  },
  {
    logo: jobIcon,
    color: hrTeamColors,
    date: "2018 to 2020",
    title: "HR Team",
    description: "3 years",
    steps: [
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2018 to 2020",
        title: "La Redoute",
        description: "Technical project manager",
      },
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2020",
        title: "Leroy Merlin / Adeo",
        description: "Software engineer",
      },
    ],
  },
  {
    logo: jobIcon,
    color: gfiColors,
    date: "2010 to 2018",
    title: "Gfi world",
    description: "8 years 1 month",
    steps: [
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2014 to 2017",
        title: "Decathlon",
        description: "Technical support engineer",
      },
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2010 to 2014",
        title: "BPCE Group",
        description: "Software engineer",
      },
    ],
  },
  {
    logo: jobIcon,
    color: natSysColors,
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
