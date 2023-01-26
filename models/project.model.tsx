import { IconType } from "react-icons";
import { Technology } from "./TimelineData.model";

export interface Project {
  title: string;
  icon: IconType;
  description: string;
  url?: string;
  sourceUrl?: string;
  technologies: Technology["label"][];
}
