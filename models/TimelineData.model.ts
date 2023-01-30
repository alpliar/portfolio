import { IconType } from "react-icons";
import { Technology } from "./technology.model";

export interface TimelineData {
  logo: IconType;
  position: string;
  company: string;
  description: string;
  date: string;
  color: string;
  steps?: Timeline;
  technologies?: Technology["label"][];
  isHighlight?: boolean;
}

export type Timeline = TimelineData[];
