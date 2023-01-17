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
    position: "Looking for opportunities",
    company: "Pole emploi",
    description: "Lyon, France",
  },
  {
    logo: jobIcon,
    color: extiaColors,
    date: "2020 to 2021",
    position: "Frontend developer",
    company: "Extia",
    description: "",
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
    logo: jobIcon,
    color: hrTeamColors,
    date: "2018 to 2020",
    position: "Frontend engineer",
    company: "HR Team",
    description: "",
    steps: [
      {
        logo: missionIcon,
        color: hrTeamColors,
        date: "2018 to 2020",
        position: "Technical project manager",
        company: "La Redoute",
        description: "",
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
    position: "Software engineer",
    company: "Gfi world",
    description: "",
    steps: [
      {
        logo: missionIcon,
        color: gfiColors,
        date: "2014 to 2017",
        position: "Technical support engineer",
        company: "Decathlon",
        description: "",
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
    position: "Software engineer",
    company: "Nat System",
    description: "",
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
    company: "Université Paris Cité",
    description: "",
  },
];

export default timelineData;
