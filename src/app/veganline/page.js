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

const imgsx = {
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

const imgsx2 = {
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

const s34 = {
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: "0px 0px 0px 3%",
  position: "absolute",
  top: "50px",
  width: "100%",
};

const font1 = {
  maxWidth: "30rem",
  fontSize: "5rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 0,
  marginTop: "30px",
  display: "block",
  color: "rgb(234,232,225)",
};

const font2 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  color: "rgb(234,232,225)",
  maxWidth: "25rem",
};

const font3 = {
  fontSize: "3rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 0,
  marginBottom: "20px",
  display: "block",
  color: "rgb(108,112,47)",
  boxSizing: "border-box",
};

const font4 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  color: "rgb(108,112,47)",
  boxSizing: "border-box",
};

const frd = {
  boxSizing: "border-box",
  margin: 0,
};

const iuc = {
  width: "100%",
  boxSizing: "border-box",
  display: "block",
  margin: 0,
  padding: 0,
};

const uce = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  marginTop: "20px",
  position: "relative",
};

const fq = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "column wrap",
  width: "100%",
  justifyContent: "flex-start",
};

export default function VeganLine() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxWidth="xl" style={jw}>
      <Paper elevation="0" />
      <Header />
      <Grid item style={frd}>
        <Container maxWidth="xl" style={iuc}>
          <Grid container style={uce}>
            <CardMedia
              component="img"
              style={imgsx}
              src="https://images.ctfassets.net/01to7kbtr3az/6lt8aKLnYgfzX0mIYELBGz/08a71a794e1b6f7137f7a4e12c3a4745/BA_TextLeft.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} style={s34}>
            <Grid container direction="column" style={fq}>
              <Grid
                item
                sm={12}
                md={12}
                sx={{ maxWidth: "none", flexBasis: "100%", flexGrow: 0 }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
                >
                  <Typography style={font1}>
                    You take care of the animals, we take care of you.
                  </Typography>
                  <Typography style={font2}>
                    Uniquely formulated to support and empower people who desire
                    to embrace a plant-based lifestyle.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
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
                      <Typography variant="h1" style={font3}>
                        What’s Amazing
                      </Typography>
                      <Typography variant="p" style={font4}>
                        We are here to support your lifestyle that extends
                        compassion to all animals. All of our vegan products are
                        designed to provide a higher amount of key nutrients
                        commonly missed in vegan or plant-based diets,
                        including:{" "}
                        <b>
                          Vitamin D, Vitamin B12, Iodine, Iron, Choline and DHA
                          Omega-3s.
                        </b>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} style={jy3}>
                <CardMedia
                  component="img"
                  style={imgsx2}
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
