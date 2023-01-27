import { SimpleGrid, Text } from "@chakra-ui/react";
import { MdSettingsAccessibility } from "react-icons/md";
import { SiJavascript, SiNpm, SiReact, SiTestinglibrary } from "react-icons/si";
import Feature from "../components/Feature";
import PageLayout from "../layouts/PageLayout";

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
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} gap={10}>
          <Feature title="React.js" icon={SiReact}>
            <Text>
              Proficiency in React.js and its ecosystem, including popular
              libraries such as Redux and React Router.
            </Text>
          </Feature>

          <Feature title="JavaScript" icon={SiJavascript}>
            <Text>
              Strong understanding of JavaScript and web development concepts,
              including HTML, CSS, and the DOM.
            </Text>
          </Feature>

          <Feature title="Tools" icon={SiNpm}>
            <Text>
              Familiarity with modern front-end development tools, such as
              webpack, Babel, and npm.
            </Text>
          </Feature>

          <Feature title="Testing" icon={SiTestinglibrary}>
            <Text>
              Experience with unit testing and debugging React applications.
            </Text>
          </Feature>

          <Feature title="Best practices" icon={MdSettingsAccessibility}>
            <Text>
              Understanding of best practices for performance optimization and
              user experience in web applications.
            </Text>
          </Feature>
        </SimpleGrid>
      </PageLayout>
    </>
  );
}
