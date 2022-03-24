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
import { ImportantDevices } from "@mui/icons-material";

interface skillType {
  name: string;
  level: number;
}

interface skillListType {
  title: string;
  description: skillType[];
}

const skillList: skillListType[] = [
  {
    title: "バックエンド",
    description: [
      { name: "PHP", level: 4 },
      { name: "Node.js", level: 2 },
      { name: "C", level: 4 },
      { name: "Phthon", level: 1 },
    ],
  },
  {
    title: "フロントエンド",
    description: [
      { name: "React", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "JQuery", level: 4 },
    ],
  },
  {
    title: "DB",
    description: [
      { name: "MySQL", level: 5 },
      { name: "Oracle", level: 4 },
      { name: "Postgresql", level: 3 },
    ],
  },
  {
    title: "インフラ・サーバー",
    description: [
      { name: "AWS(RDB)", level: 3 },
      { name: "AWS(EC2)", level: 3 },
      { name: "AWS(S3)", level: 3 },
      { name: "AWS(DynamoDB)", level: 2 },
      { name: "Apache", level: 3 },
    ],
  },
  {
    title: "Other",
    description: [
      { name: "GitHub,Git", level: 4 },
      { name: "Slack", level: 4 },
      { name: "Backlog", level: 4 },
      { name: "SVN", level: 2 },
    ],
  },
];

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
          Skill
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {skillList.map((skill) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={skill.title} xs={12} sm={6} md={4}>
              <Card sx={{ height: "300px" }}>
                <CardHeader
                  subheader={skill.title}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                    fontSize: "16px !important",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                    }}
                  ></Box>
                  <List>
                    {skill.description.map((line) => (
                      <ListItem
                        secondaryAction={
                          <ListItemAvatar>
                            <LevelStar level={line.level} />
                          </ListItemAvatar>
                        }
                        key={line.name}
                        alignItems="center"
                        disableGutters={true}
                        sx={{ fontSize: "12px" }}
                      >
                        {line.name}
                      </ListItem>
                    ))}
                    {}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Skill() {
  return <Top />;
}
