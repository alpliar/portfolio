import { Box } from "@chakra-ui/react";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import Feature from "../components/Feature";
import TimeLine from "../components/TimeLine";
import Features from "../layouts/Features";
import PageLayout from "../layouts/PageLayout";

type Props = {};

const TimelinePage: React.FC<Props> = () => {
  return (
    <Features title="Timeline" subtitle="Lorem ipsfazza faz faz" columns={1}>
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

export default TimelinePage;
