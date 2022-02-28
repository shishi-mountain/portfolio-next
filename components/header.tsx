import React from "react";
import { ClassNames } from "@emotion/react";
import { AppBar, createStyles, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = styled((theme: Theme) =>
  createStyles({
    navbar: {
      boxShadow:
        "0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(0, 0, 0, 0.2)",
      background: "#454545",
      color: "#eaeaea",
      "& a": {
        color: "#eaeaea",
      },
    },
  })
);

interface Props {
  siteTitle: string;
  siteDescription: string;
  twitterUrl: string;
  githubUrl: string;
  siteTitleComponent: React.ElementType;
}

const Header: React.FunctionComponent<Props> = ({
  twitterUrl,
  githubUrl,
  siteTitleComponent,
}) => {
  const classes = useStyles();
  return <AppBar position="sticky" className={classes.navbar}></AppBar>;
};

export default Header;
