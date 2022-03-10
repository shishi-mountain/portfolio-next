import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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
          About
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default function About() {
  return <Top />;
}
