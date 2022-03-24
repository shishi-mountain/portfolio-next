import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

function Top() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h4"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Contact
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Typography align="center" sx={{ p: 3, color: "text.secondary" }}>
          <Link href="https://twitter.com/chiimountain">
            <TwitterIcon sx={{ margin: 2 }} />
          </Link>
          <Link href="https://github.com/shishi-mountain">
            <GitHubIcon sx={{ margin: 2 }} />
          </Link>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default function Contact() {
  return <Top />;
}
