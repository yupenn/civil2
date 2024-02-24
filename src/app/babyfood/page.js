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

const wxe = {
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
};

const iuc = {
  width: "100%",
  boxSizing: "border-box",
  display: "block",
  margin: 0,
  padding: 0,
};

const bf = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  marginTop: 0,
  position: "relative",
};

const imgsx = {
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  objectFit: "cover",
  maxHeight: "700px",
};

const imgsx2 = {
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  margin: "auto",
  objectFit: "cover",
  maxHeight: "550px",
  boxSizing: "border-box",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const s34 = {
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: "0px 0px 0px 3%",
  position: "absolute",
  top: "150px",
  width: "100%",
};

const fq = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "column wrap",
  width: "100%",
  justifyContent: "flex-start",
};

const a1z = {
  maxWidth: "none",
  flexBasis: "100%",
  flexGrow: 0,
  boxSizing: "border-box",
  margin: 0,
};

const font1 = {
  maxWidth: "30rem",
  fontSize: "5rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 0,
  display: "block",
  color: "rgb(255,255,255)",
  boxSizing: "border-box",
};

const font2 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  color: "rgb(255,255,255)",
  maxWidth: "25rem",
  boxSizing: "border-box",
};

const font3 = {
  fontSize: "4rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 0,
  marginBottom: "20px",
  display: "block",
  color: "rgb(255,255,255)",
  boxSizing: "border-box",
};

const font4 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  color: "rgb(255,255,255)",
  boxSizing: "border-box",
};

const orh = {
  maxWidth: "1440px",
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
};

const b35 = {
  flexBasis: "50%",
  flexGrow: 0,
  maxWidth: "50%",
  boxSizing: "border-box",
  flexDirection: "row",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgb(158,0,94)",
  width: "642.5px",
};

const z4a = {
  boxSizing: "border-box",
  flexFlow: "wrap",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
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

export default function BabyFood() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxWidth="xl" style={jw}>
      <Paper elevation="0" />
      <Header />
      <Container maxWidth="xl" disableGutters style={wxe}>
        <Container maxWidth="xl" disableGutters style={wxe}>
          <Container maxWidth="xl" style={iuc}>
            <Grid container style={bf}>
              <CardMedia
                component="img"
                style={imgsx}
                src="https://images.ctfassets.net/01to7kbtr3az/Wx8TtyckNP1F4oq7WqJny/3db37d6b89a84adba2a2fdc478dd71fc/Impact_ChildHungerBatch_LeftBannerDesktop.jpg?fm=webp"
              />
              <Grid item xs={12} sm={12} md={12} style={s34}>
                <Grid container direction="column" style={fq}>
                  <Grid item sm={12} md={12} style={a1z}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        boxSizing: "border-box",
                      }}
                    >
                      <Typography variant="h1" style={font1}>
                        A perfect meal, in every pouch.
                      </Typography>
                      <Typography variant="p" style={font2}>
                        The only baby food on the market designed provides a
                        complete and balanced spectrum of nutrition, plus
                        brain-supporting and immune-boosting compounds.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Container>
      <Container maxWidth="xl" style={hht} sx={{ background: "rgb(158,0,94)" }}>
        <Container maxWidth="xl" fixed disableGutters style={orh}>
          <Grid container style={z4a}>
            <Grid item xs={12} sm={6} md={6} style={b35}>
              <CardMedia
                component="img"
                style={imgsx2}
                src="https://images.ctfassets.net/01to7kbtr3az/2mBV0iCleNpb33u27ZbqSz/d03484fc547307166a8181aaa3cfbb19/Fighting_Desktop_1340x1100.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} style={b35}>
              <Grid
                item
                sx={{
                  boxSizing: "border-box",
                  display: "block",
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
                      Do you desperately want to make sure your baby has all the
                      nutrients for proper growth and development? Do you wonder
                      "am I feeding her right?” We have been there, too. This is
                      our solution: a blend of more than 10 types of whole
                      foods, expertly curated to provide a complete spectrum of
                      nutrition: from proteins to complex carbohydrates, from
                      vitamin A to vitamin K, minerals, healthy fats,
                      prebiotics, and DHA. Because every baby deserves to have
                      it all.
                      <br />
                      <br />
                      Designed under U.S. and European guidelines. Organic,
                      non-GMO, free from dairy and gluten, and have no added
                      sugars.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </Container>
  );
}
