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

const h8l = {
  marginTop: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
};

const z4a = {
  boxSizing: "border-box",
  flexFlow: "wrap",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const jy3 = {
  flexBasis: "50%",
  flexGrow: 0,
  maxWidth: "50%",
  boxSizing: "border-box",
  flexDirection: "row",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgb(234,232,225)",
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

const font1 = {
  fontSize: "3rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 0,
  marginBottom: "20px",
  display: "block",
  color: "rgb(108,112,47)",
  boxSizing: "border-box",
};

const font2 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  color: "rgb(108,112,47)",
  boxSizing: "border-box",
};

export default function KidsSnacks() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxWidth="xl" style={jw}>
      <Paper elevation="0" />
      <Header />
      <Grid container style={h8l}>
        <Container
          maxWidth="xl"
          style={hht}
          sx={{ background: "rgb(234,232,225)" }}
        >
          <Container maxWidth="xl" fixed disableGutters style={orh}>
            <Grid container style={z4a}>
              <Grid item xs={12} sm={6} md={6} style={jy3}>
                <CardMedia
                  component="img"
                  style={imgsx}
                  src="https://images.ctfassets.net/01to7kbtr3az/5sBR0kv32ZfuliS2blQt26/219d2d4fd4fbccc3e8d6b80eaa855f60/ImpactPartnership_2up_Desktop_1340x1100.png"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} style={jy3}>
                <Grid
                  item
                  sx={{
                    display: "block",
                    boxSizing: "border-box",
                    margin: "auto",
                    maxWidth: "80%",
                    height: "100%",
                  }}
                >
                  <Grid container style={elf}>
                    <Grid item sx={{ boxSizing: "border-box", margin: 0 }}>
                      <Typography variant="h1" style={font1}>
                        Helping kids meet science-backed, critical nutritional
                        needs through simple snacking.
                      </Typography>
                      <Typography variant="p" style={font2}>
                        A pouch that is nutrient-packed and unbelievably
                        delicious. Childhood nutrition provides the foundation
                        for health, education, personal development and
                        happiness.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Grid>
      <Grid container style={h8l}>
        <Container
          maxWidth="xl"
          style={hht}
          sx={{ background: "rgb(234,232,225)" }}
        >
          <Container maxWidth="xl" fixed disableGutters style={orh}>
            <Grid container style={z4a}>
              <Grid item xs={12} sm={6} md={6} style={jy3}>
                <Grid
                  item
                  sx={{
                    display: "block",
                    boxSizing: "border-box",
                    margin: "auto",
                    maxWidth: "80%",
                    height: "100%",
                  }}
                >
                  <Grid container style={elf}>
                    <Grid item sx={{ boxSizing: "border-box", margin: 0 }}>
                      <Typography variant="h1" style={font1}>
                        What’s Amazing
                      </Typography>
                      <Typography variant="p" style={font2}>
                        Pouches are magical, especially for kids: the one that
                        they can enjoy any time of the day, for any meal...and
                        the kiddos think they are getting a treat!
                        <br />
                        <br />
                        Our strawberry smoothie recipe features a combination of
                        ripe strawberries, vegetables and seeds for
                        comprehensive nutrition. Plus that nutrient blend
                        derived from vegetables and fruits for that extra
                        antioxidant, anti-inflammatory and nutrition boost! Yep,
                        you don’t have to fight with them over eating
                        vegetables. This pouch gives them all.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} style={jy3}>
                <CardMedia
                  component="img"
                  style={imgsx}
                  src="https://images.ctfassets.net/01to7kbtr3az/5sBR0kv32ZfuliS2blQt26/219d2d4fd4fbccc3e8d6b80eaa855f60/ImpactPartnership_2up_Desktop_1340x1100.png"
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
