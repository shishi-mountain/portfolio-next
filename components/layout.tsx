import React from "react";
import Head from "next/head";
import Header from "./header";

interface Props {
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({ title = "FujinRaijin★" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="wrapper">
        <Header />
      </div>
    </>
  );
};

export default Layout;
