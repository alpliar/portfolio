import { GoArchive, GoCalendar, GoTelescope } from "react-icons/go";
import { Timeline } from "../models/TimelineData.model";

const timelineData: Timeline = [
  {
    logo: GoTelescope,
    color: "orange.300",
    date: "now",
    title: "Looking for a frontend developer position",
    description: "Lyon, France",
  },
  {
    logo: GoCalendar,
    color: "red.300",
    date: "yesterday",
    title: "Busy",
    description: "busy busy",
  },
  {
    logo: GoArchive,
    color: "green.300",
    date: "before",
    title: "Very Busy",
    description: "busy busy busy",
  },
];

export default timelineData;
