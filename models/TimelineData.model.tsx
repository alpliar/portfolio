import { IconType } from "react-icons";

export interface Technology {
  label: string;
  icon?: IconType;
}
export interface TimelineData {
  logo: IconType;
  position: string;
  company: string;
  description: string;
  date: string;
  color: string;
  steps?: Timeline;
  technologies?: Technology[];
}

export type Timeline = TimelineData[];
