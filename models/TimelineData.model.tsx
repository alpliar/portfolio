import { IconType } from "react-icons";

export interface TimelineData {
  logo: IconType;
  position: string;
  company: string;
  description: string;
  date: string;
  color: string;
  steps?: Timeline;
}

export type Timeline = TimelineData[];
