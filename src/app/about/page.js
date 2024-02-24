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
  marginTop: "75px",
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
};

const h03 = {
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: 0,
  positon: "relative",
};

const imgsx = {
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  objectFit: "cover",
  maxHeight: "700px",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const imgsx2 = {
  objectFit: "cover",
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  aspectRatio: "16/9",
  boxSizing: "border-box",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const imgsx3 = {
  display: "block",
  bakgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  objectFit: "cover",
  margin: "auto",
  width: "151px",
  boxSizing: "border-box",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const imgsx4 = {
  maxHeight: "375px",
  display: "block",
  bakgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  objectFit: "cover",
  width: "100%",
  boxSizing: "border-box",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const eh = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  minWidth: "500px",
  maxWidth: "100%",
  margin: 0,
  boxSizing: "border-box",
};

const font1 = {
  color: "rgb(234,232,225)",
  textAlign: "center",
  fontSize: "5rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 10,
  display: "block",
  boxSizing: "border-box",
};

const font2 = {
  color: "rgb(234,232,225)",
  textAlign: "center",
  marginTop: "40px",
  maxWidth: "602px",
  fontSize: "1.1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  boxSizing: "border-box",
};

const font3 = {
  fontSize: "3rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  display: "block",
  color: "rgb(0,43,73)",
  textAlign: "center",
  maxWidth: "39rem",
  margin: "auto",
  boxSizing: "border-box",
};

const font4 = {
  fontSize: "1.6rem",
  lineHeight: 1,
  letterSpacing: "-0.2px",
  textAlign: "center",
  display: "block",
  color: "rgb(0,43,73)",
  overflowWrap: "break-word",
  maxWidth: "70%",
  margin: "auto",
  boxSizing: "border-box",
};

const font5 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  textAlign: "center",
  display: "block",
  color: "rgb(0,43,73)",
  margin: "auto",
  maxWidth: "20rem",
  boxSizing: "border-box",
};

const font6 = {
  fontSize: "2.2rem",
  lineHeight: 1,
  letterSpacing: "-0.5px",
  textAlign: "center",
  display: "block",
  color: "rgb(234,232,225)",
  margin: "auto",
  maxWidth: "50rem",
  boxSizing: "border-box",
};

const font7 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  textAlign: "center",
  display: "block",
  color: "rgb(234,232,225)",
  margin: "2% auto",
  maxWidth: "25rem",
  boxSizing: "border-box",
  alignContent: "center",
};

const t8 = {
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  padding: 0,
  transition: "opacity 400ms ease 0, transform 400ms ease 0s",
  transform: "none",
  opacity: 1,
};

const n6 = {
  paddingLeft: "16px",
  paddingTop: "16px",
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
};

const zc = {
  boxSizing: "border-box",
  margin: 0,
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100%",
  display: "block",
};

const dv = {
  paddingTop: "32px",
  flexBasis: "91.6667%",
  flexGrow: 0,
  maxWidth: "91.6667%",
  boxSizing: "border-box",
  margin: 0,
};

const s5 = {
  flexBasis: "91.6667%",
  flexGrow: 0,
  maxWidth: "91.6667%",
  boxSizing: "border-box",
  margin: 0,
};

const d5 = {
  flexBasis: "100%",
  flexGrow: 0,
  boxSizing: "border-box",
  margin: "auto",
  maxWidth: "85%",
};

const mq = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "space-around",
};

const mp = {
  flexBasis: "25%",
  flexGrow: 0,
  maxWidth: "25%",
  boxSizing: "border-box",
  margin: 0,
};

const sy = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  justifyContent: "space-between",
  alignItems: "stretch",
  width: "100%",
  margin: "auto",
  height: "100%",
};

const d3 = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flexDirection: "row",
};

const un = {
  paddingTop: "32px",
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: 0,
};

const jd = {
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: "5% 0px 0px",
};

const oc = {
  padding: 0,
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
  backgroundColor: "rgb(27,58,50)",
};

const ca = {
  boxSizing: "border-box",
  margin: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100%",
};

const rlo = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  marginTop: "-16px",
  justifyContent: "center",
  width: "100%",
  padding: "1rem",
  marginLeft: 0,
};

export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxWidth="xl" style={jw}>
      <Paper elevation="0" />
      <Header />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: "block",
          boxSizing: "border-box",
          margin: 0,
          transition: "opacity 800ms ease 0s, transform 800ms ease 0s",
          transform: "none",
          opacity: 1,
        }}
      >
        <Container maxWidth="xl" disableGutters style={wxe}>
          <Grid
            container
            sx={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Grid item xs={12} sm={12} md={12} style={h03}>
              <CardMedia
                component="img"
                alt="The Civil Way"
                style={imgsx}
                src="https://images.ctfassets.net/01to7kbtr3az/7d2fD07uYvznSKQu3UW4Gu/1a93674fa09b8e27b66b926c94fa6383/About_TheChobaniWay_Desktop.jpg"
              />
              <Grid item md={12} style={eh}>
                <Typography variant="h1" align="center" style={font1}>
                  The Civil Way
                </Typography>
                <Typography variant="p" align="center" style={font2}>
                  "I have the audacity to believe that peoples everywhere can
                  have three meals a day for their bodies, education and culture
                  for their minds, and dignity, equality, and freedom for their
                  spirits." <br />
                  Martin Luther King Jr.; Nobel Peace Prize acceptance speech,
                  Oslo, Norway, 1964
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid
        container
        sx={{
          boxSizing: "border-box",
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="xl" style={t8}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{ boxSizing: "border-box", margin: 0, position: "relative" }}
          >
            <CardMedia
              component="img"
              alt="Civil Society"
              style={imgsx2}
              src="https://images.ctfassets.net/01to7kbtr3az/7pVW1hM8HuheiZ82CrfPBW/011f75171031bb6441d5ad3f168502c7/About_OurCulture_Desktop.svg?w=1333"
            />
            <Grid item xs={12} sm={12} md={12} style={zc}>
              <Grid
                container
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexFlow: "wrap",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                id="igrid"
              >
                <Grid
                  item
                  md={12}
                  style={s5}
                  data-aos-duration="300"
                  data-aos-anchor="#igrid"
                >
                  <Typography variant="h1" align="center" style={font3}>
                    We believe a civil society is a society where all people
                    have what they need to thrive.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={d5}>
                  <Grid container style={mq}>
                    <Grid item md={4} style={mp}>
                      <Grid
                        container
                        style={sy}
                        data-aos-duration="100"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <Grid item md={12} style={un}>
                          <Grid container style={d3}>
                            <Grid item md={12} style={un}>
                              <CardMedia
                                component="img"
                                style={imgsx3}
                                src="https://images.ctfassets.net/01to7kbtr3az/70dZwfpXWdvI5zbc2bZfRA/9136b5f8c10d4946193b55877e2312de/GivingBack.svg"
                              />
                            </Grid>
                            <Grid item md={12} style={jd}>
                              <Typography variant="h3" style={font4}>
                                Advancing Childhood Nutrition
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={11} style={dv}>
                          <Typography variant="p" align="center" style={font5}>
                            By helping kids eat better, we are laying key
                            groundwork for a healthier, happier and more
                            harmonious society many decades down the road.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4} style={mp}>
                      <Grid
                        container
                        style={sy}
                        data-aos-duration="100"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <Grid item md={12} style={un}>
                          <Grid container style={d3}>
                            <Grid item md={12} style={un}>
                              <CardMedia
                                component="img"
                                style={imgsx3}
                                src="https://images.ctfassets.net/01to7kbtr3az/1ks7OL66cojBuMVb068T4l/a225d8c2760fa6c1793532ec1b88e39d/Innovation.svg"
                              />
                            </Grid>
                            <Grid item md={12} style={jd}>
                              <Typography variant="h3" style={font4}>
                                Promoting Nutrition Equity
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={11} style={dv}>
                          <Typography variant="p" align="center" style={font5}>
                            We strive to provide everyone with equitable access
                            to obtaining whole nutrition so that we could feel
                            and perform at our best.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4} style={mp}>
                      <Grid
                        container
                        style={sy}
                        data-aos-duration="100"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <Grid item md={12} style={un}>
                          <Grid container style={d3}>
                            <Grid item md={12} style={un}>
                              <CardMedia
                                component="img"
                                style={imgsx3}
                                src="https://images.ctfassets.net/01to7kbtr3az/5XcZm0gdCowYL4FSrXvX3c/1b34f9daa6712d15b5af98453c4a48f9/OurPeople.svg"
                              />
                            </Grid>
                            <Grid item md={12} style={jd}>
                              <Typography variant="h3" style={font4}>
                                Supporting Specialty Diets
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={11} style={dv}>
                          <Typography variant="p" align="center" style={font5}>
                            We make it easier than ever for people on specialty
                            diets, such as vegan or gluten-free to embrace the
                            lifestyle of their choice and stay well nourished.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4} style={mp}>
                      <Grid
                        container
                        style={sy}
                        data-aos-duration="100"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <Grid item md={12} style={un}>
                          <Grid container style={d3}>
                            <Grid item md={12} style={un}>
                              <CardMedia
                                component="img"
                                style={imgsx3}
                                src="https://images.ctfassets.net/01to7kbtr3az/70dZwfpXWdvI5zbc2bZfRA/9136b5f8c10d4946193b55877e2312de/GivingBack.svg"
                              />
                            </Grid>
                            <Grid item md={12} style={jd}>
                              <Typography variant="h3" style={font4}>
                                Championing Environmental Stewardship
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={11} style={dv}>
                          <Typography variant="p" align="center" style={font5}>
                            What we choose to eat can have a big impact on the
                            environment. Our products are intentionally
                            formulated to use ingredients that are inherently
                            better for the soil and communities.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" style={oc}>
          <Grid
            container
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
            sx={{
              boxSizing: "border-box",
              display: "flex",
              flexFlow: "wrap",
              width: "100%",
              margin: 0,
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                flexBasis: "100%",
                flexGrow: 0,
                maxWidth: "100%",
                margin: 0,
                boxSizing: "border-box",
              }}
            >
              <CardMedia
                component="img"
                style={imgsx4}
                src="https://images.ctfassets.net/01to7kbtr3az/4UhELRi8MQhSJSQl3dAzRW/dfe91a05e4c32266c93d8794e13653b8/Bottom_Banner-2.jpg"
              />
              <Grid item xs={12} sm={12} md={12} style={ca}>
                <Grid
                  container
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="top-bottom"
                  style={rlo}
                >
                  <Grid item xs={12} sm={9} md={10} lg={12} style={n6}>
                    <Typography variant="h1" style={font6} align="center">
                      Initiatives
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={7} md={6} lg={12} style={n6}>
                    <Typography variant="p" style={font7} align="center">
                      School Giveaways
                      <br />
                      <br />
                      All throughout the year, Civil partners with the schools
                      to educate parents and students about healthy eating and
                      donates
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </Container>
  );
}
