import { Box } from "@chakra-ui/react";
import TimeLine from "../components/TimeLine";
import Features from "../layouts/Features";

type Props = {};

const ExperiencePage: React.FC<Props> = () => {
  return (
    <Features
      title="Experience"
      subtitle="From most recent to oldest"
      columns={1}
    >
      <Box
        marginX={{
          base: -4,
          sm: -8,
          md: -16,
          lg: -32,
        }}
      >
        <TimeLine />
      </Box>
    </Features>
  );
};

export default ExperiencePage;
