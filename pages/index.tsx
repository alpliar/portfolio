import { SimpleGrid } from "@chakra-ui/react";
import { MdSettingsAccessibility } from "react-icons/md";
import { SiJavascript, SiNpm, SiReact, SiTestinglibrary } from "react-icons/si";
import PageLayout from "../layouts/PageLayout";
import SingleFeature from "../layouts/SingleFeature";

export default function Home() {
  return (
    <>
      <PageLayout
        tabName="Home"
        title="Alexandre"
        subtitle="I am a developer based in Lyon, France. 
          I have many years of experience in consulting in all areas of digital (dev, testing, design). 
          I love minimal but accessible design. I love nature, games (video, board) and music."
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} w="full">
          <SingleFeature
            titleStart="React.js"
            titleEnd="Confirmed"
            icon={SiReact}
            description="Proficiency in React.js and its ecosystem, including popular
              libraries such as Redux and React Router."
          ></SingleFeature>

          <SingleFeature
            titleStart="JavaScript"
            titleEnd="Confirmed"
            icon={SiJavascript}
            description="Strong understanding of JavaScript and web development concepts,
              including HTML, CSS, and the DOM."
          ></SingleFeature>

          <SingleFeature
            titleStart="Dev tools"
            titleEnd="Confirmed"
            icon={SiNpm}
            description="Familiarity with modern front-end development tools, such as
              webpack, Babel, and npm."
          ></SingleFeature>

          <SingleFeature
            titleStart="Testing"
            titleEnd="Confirmed"
            icon={SiTestinglibrary}
            description="Experience with unit testing and debugging React applications."
          ></SingleFeature>

          <SingleFeature
            titleStart="Best practices"
            titleEnd="Confirmed"
            icon={MdSettingsAccessibility}
            description="Understanding of best practices for performance optimization and
              user experience in web applications."
          ></SingleFeature>
        </SimpleGrid>
      </PageLayout>
    </>
  );
}
