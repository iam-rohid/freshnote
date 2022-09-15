import { GetServerSideProps, GetStaticProps } from "next";

const ProjectPage = () => {
  return null;
};

export default ProjectPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { projectId } = params;
  return {
    props: {},
    redirect: {
      destination: `${projectId}/explorer`,
      permanent: true,
    },
  };
};
