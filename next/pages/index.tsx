import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TopButton from "../components/TopButton";
import { styled } from "@mui/material/styles";

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
          FuRai page
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          web engineer
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        {/* <Grid container spacing={5} alignItems="flex-end"> */}
        <TopButton />
        {/* </Grid> */}
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <Top />;
}
