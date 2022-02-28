import React from "react";

export const getStaticProps = async () => ({
  props: {
    title: "contact",
  },
});

const Contact = () => {
  return <div>contact</div>;
};

export default Contact;
