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
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  minHeight: "100vh",
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

const gjj = {
  display: "block",
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: 0,
  position: "absolute",
  top: "50%",
  left: "4%",
  width: "100%",
  transform: "translateY{-50%}",
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

const imgsx2 = {
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  margin: "auto",
  maxHeight: "700px",
  objectFit: "cover",
  boxSizing: "border-box",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const jnm = {
  width: "100%",
  margin: "20px auto 0px",
  boxSizing: "border-box",
  display: "block",
  padding: 0,
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

const d3b = {
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flexDirection: "row",
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
      <Grid container style={d3b}>
        <Container maxWidth="xl" disableGutters style={jnm}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              maxWidth: "100%",
              margin: 0,
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <Grid container style={d3b}>
              <CardMedia
                component="img"
                style={imgsx2}
                src="https://images.ctfassets.net/01to7kbtr3az/6GmDWWQ3bFej2AOMcYvwGP/fc81a7f84d0f9cb9497ce59e896adb68/ChobaniCommunityImpactFund_Desktop.png"
              />
              <Grid item xs={12} sm={12} md={12} style={gjj}>
                <Grid
                  container
                  sx={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    flexDirection: "row",
                  }}
                  data-aos1="fade-in"
                ></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </Container>
  );
}
