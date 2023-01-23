import React from "react";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiRedux,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";
import Feature from "../components/Feature";
import Features from "../layouts/Features";

type Props = {};
const SkillsPage: React.FC<Props> = ({}) => {
  return (
    <Features
      title="Skills"
      subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit"
    >
      <Feature title="Typescript" icon={SiTypescript}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>

      <Feature title="React" icon={SiReact}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>

      <Feature title="Next.js" icon={SiNextdotjs}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>

      <Feature title="Nuxt.js" icon={SiNuxtdotjs}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>
      <Feature title="Svelte" icon={SiSvelte}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>
      <Feature title="Redux" icon={SiRedux}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </Feature>
    </Features>
  );
};

export default SkillsPage;
