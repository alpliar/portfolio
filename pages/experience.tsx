import TimeLine from "../components/TimeLine";
import PageLayout from "../layouts/PageLayout";

type Props = {};

const ExperiencePage: React.FC<Props> = () => {
  return (
    <PageLayout title="Experience" subtitle="From most recent to oldest">
      <TimeLine />
    </PageLayout>
  );
};

export default ExperiencePage;
