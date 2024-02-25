"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import * as React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../page.css";

const orh = {
  maxWidth: "1440px",
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
};

const hht = {
  marginTop: 0,
  position: "relative",
  paddingLeft: "24px",
  paddingRight: "24px",
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
};

const z4a = {
  boxSizing: "border-box",
  flexFlow: "wrap",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const jw = {
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
  padding: 0,
  height: "100%",
  overflow: "clip",
  cursor: "auto",
};

const xjt = {
  flexBasis: "50%",
  flexGrow: 0,
  maxWidth: "50%",
  boxSizing: "border-box",
  flexDirection: "row",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgb(245,233,93)",
  width: "642.5px",
};

const imgsx = {
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  margin: "auto",
  maxHeight: "550px",
  objectFit: "cover",
  boxSizing: "border-box",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const lei = {
  boxSizing: "border-box",
  margin: "auto",
  maxWidth: "80%",
  height: "100%",
  display: "block",
};

const elf = {
  boxSizing: "border-box",
  flexFlow: "wrap",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  maxHeight: "550px",
  minHeight: "550px",
  width: "94%",
  margin: "auto",
};

const font1 = {
  fontSize: "2.2rem",
  lineHeight: 1,
  letterSpacing: "-0.5px",
  margin: 0,
  display: "block",
  color: "rgb(26,60,52)",
};

const font2 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  marginTop: "10px",
  display: "block",
  color: "rgb(26,60,52)",
};

export default function Crackers() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxWidth="xl" style={jw}>
      <Paper elevation="0" />
      <Header />
      <Grid item sx={{ boxSizing: "border-box", margin: 0 }}>
        <Container
          maxWidth="xl"
          style={hht}
          sx={{ background: "rgb(245, 233, 93)" }}
        >
          <Container maxWidth="xl" fixed disableGutters style={orh}>
            <Grid container style={z4a}>
              <Grid item xs={12} sm={6} md={6} style={xjt}>
                <CardMedia
                  component="img"
                  style={imgsx}
                  src="https://images.ctfassets.net/01to7kbtr3az/6Xld0vaSnWiEmB0I3kHA8/2ceabbffdaff218627eadcc01868af49/About_Innovation_Module_Desktop.png?fm=webp"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} style={xjt}>
                <Grid item style={lei}>
                  <Grid container style={elf}>
                    <Grid item sx={{ boxSizing: "border-box", margin: 0 }}>
                      <Typography variant="h2" style={font1}>
                        Like cheez-its, but even better.
                      </Typography>
                      <Typography variant="p" style={font2}>
                        Crisp and tangy little morels of deliciousness, made
                        with real, slowly fermented sourdough. Rich in
                        antioxidants and irresistable sourdough flavor.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Grid>
      <Grid item sx={{ boxSizing: "border-box", marginTop: 2 }}>
        <Container
          maxWidth="xl"
          style={hht}
          sx={{ background: "rgb(245, 233, 93)" }}
        >
          <Container maxWidth="xl" fixed disableGutters style={orh}>
            <Grid container style={z4a}>
              <Grid item xs={12} sm={6} md={6} style={xjt}>
                <Grid item style={lei}>
                  <Grid container style={elf}>
                    <Grid item sx={{ boxSizing: "border-box", margin: 0 }}>
                      <Typography variant="h2" style={font1}>
                        What’s Amazing
                      </Typography>
                      <Typography variant="p" style={font2}>
                        Sourdough fermentation turns grains into superfoods.
                        Studies sourdough fermentation activates essential
                        vitamins and minerals, breaks down gluten, enables
                        fortification with dietary fibers, lowered glycemic
                        index, improved protein digestibility and decreased the
                        content of anti-nutritional factors.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} style={xjt}>
                <CardMedia
                  component="img"
                  style={imgsx}
                  src="https://images.ctfassets.net/01to7kbtr3az/6Xld0vaSnWiEmB0I3kHA8/2ceabbffdaff218627eadcc01868af49/About_Innovation_Module_Desktop.png?fm=webp"
                />
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Grid>
      <Footer />
    </Container>
  );
}
