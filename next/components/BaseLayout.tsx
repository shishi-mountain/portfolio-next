import * as React from "react";
import { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        FuRai
      </Link>{" "}
      {/* {new Date().getFullYear()} */}
      2022
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Contact",
    description: ["Twitter", "History", "Contact us", "Locations"],
  },
];

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link href="/" variant="button" color="text.primary">
              Furai's portfolio
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/skill"
              sx={{ my: 1, mx: 1.5 }}
            >
              Skill
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/portfolio"
              sx={{ my: 1, mx: 1.5 }}
            >
              Portfolio
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/contact"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container>
        <main>{children}</main>
        {/* Footer */}
        {/* <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="text.secondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container> */}
        {/* End footer */}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
};

export default Layout;
