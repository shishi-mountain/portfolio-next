import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { ListItem, ListItemAvatar } from "@mui/material";
import LevelStar from "../components/LevelStar";

interface skillType {
  name: string;
  level: number;
}

interface skillListType {
  title: string;
  description: skillType[];
}

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
          Portfolio
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default function Portfoilo() {
  return <Top />;
}
