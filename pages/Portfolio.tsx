import React from "react";

export const getStaticProps = async () => ({
  props: {
    title: "portfolio",
  },
});

const Portfoilo = () => {
  return <div>portfolio</div>;
};

export default Portfoilo;
