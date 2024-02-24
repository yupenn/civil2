import * as React from "react";
import MuiLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import { Caprasimo } from "next/font/google";
const caprasimo = Caprasimo({ subsets: ["latin"], weight: ["400"] });

const headerSS = {
  margin: 0,
  display: "block",
  cursor: "pointer",
  textDecoration: "none 2px rgb(27,58,50,0.3)",
  textUnderlineoffset: "24px",
  padding: "1.5rem 0rem 1.4rem",
  fontFamily: caprasimo.style.fontFamily,
};

const headerGridSS0 = {
  boxSizing: "border-box",
  margin: 0,
  height: "100%",
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: "1.875rem",
};

const headerGridSS = {
  boxSizing: "border-box",
  margin: 0,
  height: "auto",
  paddingTop: 0,
  paddingLeft: "20px",
  paddingRight: "20px",
};

const bor = {
  display: "initial",
  boxShadow: "none",
  width: "100%",
  boxSizing: "border-box",
  position: "fixed",
  top: 0,
  left: "auto",
  background: "white",
  color: "rgb(27,58,50)",
  height: "75px",
  maxHeight: "75px",
  right: "auto",
  transition:
    "box shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms; animation: animate-top .4s both",
};

const epk = {
  boxSizing: "border-box",
  maxWidth: "100%",
  padding: 0,
};

const y3h = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  flexDirection: "row",
  alignItems: "center",
  height: "100%",
};

const lft = {
  boxSizing: "border-box",
  margin: 0,
};

const rgt = {
  boxSizing: "border-box",
  margin: 0,
  flexBasis: "calc(100%/4)",
};

const msb = {
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  margin: 0,
  flexBasis: "calc(100%/3)",
};

const yk = {
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  width: "calc(100% + 32px)",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  margin: 0,
};

export default function Header() {
  return (
    <AppBar position="fixed" color="primary" style={bor}>
      <Grid item xs={12} sm={12} md={12} style={epk}>
        <Grid container style={y3h}>
          <Grid item style={lft}>
            <Grid container spacing={{ xs: 4 }} style={yk}>
              <Grid item style={headerGridSS0}>
                <Link
                  href="/babyfood"
                  component={NextLink}
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography style={headerSS}>Baby Food</Typography>
                </Link>
              </Grid>
              <Grid item style={headerGridSS}>
                <Link
                  href="/kidssnacks"
                  component={NextLink}
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography style={headerSS}>Kids Snacks</Typography>
                </Link>
              </Grid>
              <Grid item style={headerGridSS}>
                <Link
                  href="/crackers"
                  component={NextLink}
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography style={headerSS}>Crackers</Typography>
                </Link>
              </Grid>
              <Grid item style={headerGridSS}>
                <Link
                  href="/veganline"
                  component={NextLink}
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography style={headerSS}>Vegan Line</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={msb}>
            <Link
              href="/"
              component={NextLink}
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "4rem",
                  margin: 0,
                  display: "block",
                  cursor: "pointer",
                  textDecoration: "none",
                  textDecorationThickness: "2px",
                  textDecorationColor: "rgb(27,58,50,0.3)",
                  textUnderlineoffset: "24px",
                  fontFamily: caprasimo.style.fontFamily,
                }}
              >
                Civil
              </Typography>
            </Link>
          </Grid>
          <Grid item style={rgt}>
            <Grid container spacing={{ xs: 4 }} style={yk}>
              <Grid item style={headerGridSS0}>
                <Link
                  href="/about"
                  component={NextLink}
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography style={headerSS}>About</Typography>
                </Link>
              </Grid>
              <Grid item style={headerGridSS}>
                <Link
                  href="/disclaimer"
                  component={NextLink}
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography style={headerSS}>Disclaimer</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
