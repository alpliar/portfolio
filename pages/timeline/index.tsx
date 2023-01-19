import TimeLine from "../../components/TimeLine";
import PageLayout from "../../layouts/PageLayout";

type Props = {};

const TimelinePage: React.FC<Props> = () => {
  return (
    <PageLayout>
      <TimeLine />
    </PageLayout>
  );
};

export default TimelinePage;
