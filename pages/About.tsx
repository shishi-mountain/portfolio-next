import React from "react";

export const getStaticProps = async () => ({
  props: {
    title: "about me",
  },
});

const About = () => {
  return <div>about hello</div>;
};

export default About;
