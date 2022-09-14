import { GetStaticProps } from "next";

const Dashbaord = () => {
  return <h1>Hellol</h1>;
};

export default Dashbaord;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    redirect: {
      destination: "/dashboard/notebooks",
    },
  };
};
