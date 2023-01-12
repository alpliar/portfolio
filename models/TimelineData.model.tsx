import { IconType } from "react-icons";

export interface TimelineData {
  logo: IconType;
  title: string;
  description: string;
  date: string;
  color: string;
}

export type Timeline = TimelineData[];
