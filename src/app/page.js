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

import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";
register();

import AOS from "aos";
import "aos/dist/aos.css";

import "./page.css";

const ahj = {
  boxSizing: "border-box",
  flexFlow: "wrap",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const o2z = {
  flexBasis: "50%",
  flexGrow: 0,
  maxWidth: "50%",
  boxSizing: "border-box",
  flexDirection: "row",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgb(245,233,93)",
};

const uce = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  position: "relative",
};

const s34 = {
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: "0px 0px 0px 3%",
  position: "absolute",
  top: "100px",
  width: "100%",
};

const orh = {
  maxWidth: "100%",
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

const font1 = {
  fontSize: "1.4rem",
  lineHeight: 1,
  letterSpacing: "-0.2px",
  margin: 0,
  textAlign: "center",
  display: "block",
  color: "rgb(232,230,223)",
  overflowWrap: "break-word",
};

const font2 = {
  fontSize: "1.2rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  color: "rgb(27,58,50)",
};

const font3 = {
  fontSize: "1.7rem",
  lineHeight: 1,
  letterSpacing: "-0.2px",
  margin: 0,
  textAlign: "center",
  display: "block",
  color: "rgb(232,230,223)",
  overflowWrap: "break-word",
};

const font4 = {
  maxWidth: "30rem",
  fontSize: "5rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 0,
  display: "block",
  color: "rgb(232,230,223)",
};

const font5 = {
  fontSize: "1.3rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: "0px",
  display: "block",
  color: "rgb(232,230,223)",
  maxWdith: "25rem",
  fontWeight: "bold",
};

const font6 = {
  fontSize: "5rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 20,
  display: "block",
  color: "rgb(115,39,74)",
};

const font7 = {
  fontSize: "1.2rem",
  lineHeight: 1.5,
  letterSpacing: "-0.2px",
  margin: 0,
  display: "block",
  color: "rgb(115,39,74)",
};

const a1z = {
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "none",
  boxSizing: "border-box",
  margin: 0,
};

const ru = {
  boxSizing: "border-box",
  margin: 0,
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100%",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  padding: "100px 0px",
  alignItems: "center",
};
const boj = {
  fontSize: "1.8rem",
  lineHeight: 1.25,
  letterSpacing: "-0.1px",
  margin: 0,
  color: "rgb(27,58,50)",
};

const ra = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  justifyContent: "center",
  alignItems: "flex-start",
  margin: "auto",
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

const wx = {
  position: "absolute",
  bottom: "7%",
  left: "3.2%",
  color: "white",
};

const wn = {
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
  padding: 0,
};

const oe = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  outline: 0,
  border: 0,
  margin: 0,
  userSelect: "none",
  verticalAlign: "middle",
  appearance: "none",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: 1.75,
  textTransform: "uppercase",
  minWidth: "64px",
  borderRadius: "4px",
  padding: "12px 18px",
  cursor: "pointer",
  color: "#EAE8E1",
  boxShadow: "none",
  textDecoration: "none",
  backgroundColor: "#46332c",
};

const leig = {
  display: "block",
  boxSizing: "border-box",
  margin: "auto",
  height: "100%",
  maxWidth: "95%",
};

const ur = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  maxWidth: "85%",
  justifyContent: "center",
};

const ah = {
  boxSizing: "border-box",
  flexFlow: "wrap",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const x0 = {
  flexBasis: "50%",
  flexGrow: 0,
  maxWidth: "50%",
  boxSizing: "border-box",
  flexDirection: "row",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgb(234,232,225)",
};

const d8f = {
  boxSizing: "border-box",
  margin: 0,
  width: "33%",
  minWidth: "200px",
  maxWidth: "400px",
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

const nh3 = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  rowGap: "30px",
};

const xyi = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  margin: "auto",
  height: "100%",
  rowGap: "30px",
};

const email = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  outline: 0,
  border: "0px rgb(255,255,255)",
  margin: 0,
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  appearance: "none",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: 1.75,
  textTransform: "uppercase",
  minWidth: "64px",
  borderRadius: "4px",
  color: "rgb(255,255,255)",
  padding: "12px 18px",
  backgroundColor: "rgb(115,39,74)",
  boxShadow: "none",
};

const imgsx = {
  width: "100%",
  objectFit: "cover",
  height: "100vh",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const imgsx2 = {
  aspectRatio: "16 / 8",
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  objectFix: "cover",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const imgsx3 = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  margin: "auto",
  maxHeight: "550px",
  objectFit: "cover",
};

const imgsx4 = {
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  objectFit: "cover",
  margin: "auto",
  width: "138px",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

const imgsx5 = {
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

const imgsx6 = {
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  objectFit: "cover",
  maxHeight: "550px",
  overflowClipMargin: "content-box",
  overflow: "clip",
};

export const MySlider = () => {
  const swiperElRef = React.useRef(null);

  return (
    <swiper-container
      class="mySwiper"
      pagination="true"
      pagination-clickable="true"
      navigation="true"
      space-between="30"
      ref={swiperElRef}
      centered-slides="true"
      autoplay-delay="5000"
      autoplay-disable-on-interaction="false"
    >
      <swiper-slide>
        <Grid sx={{ boxSizing: "border-box", position: "relative" }}>
          <Card>
            <Box sx={{ postion: "relative" }}>
              <CardMedia
                component="img"
                alt="Chobani® Zero Sugar*"
                style={imgsx}
                src="https://images.ctfassets.net/01to7kbtr3az/5qxzzeOuCiYWZho7yaulob/d6b3fcd966026f235912256dae76cac7/WEB_Homepage_Desktop_Nov2023_ZeroSugar.jpg"
              />
            </Box>
            <Box sx={wx}>
              <Typography variant="h1">ABC</Typography>
              <Grid sx={{ marginTop: "2rem" }}>
                <Button contained="primary" size="medium" style={oe}>
                  Learn more
                </Button>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </swiper-slide>
      <swiper-slide>
        <Grid sx={{ boxSizing: "border-box", position: "relative" }}>
          <Card>
            <Box sx={{ postion: "relative" }}>
              <CardMedia
                component="img"
                alt="Chobani Creations®"
                style={imgsx}
                srcSet="https://images.ctfassets.net/01to7kbtr3az/7ayKVHFJPck60JO0vCyBSi/17954c1d60f5710a863ebc61a9cc5338/JANBRIEF_header_2560x1440_desktop_v10.jpg"
              />
            </Box>
            <Box sx={wx}>
              <Typography variant="h1">DEF</Typography>
              <Grid sx={{ marginTop: "2rem" }}>
                <Button contained="primary" size="medium" style={oe}>
                  Learn more
                </Button>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </swiper-slide>
      <swiper-slide>
        <Grid sx={{ boxSizing: "border-box", position: "relative" }}>
          <Card>
            <Box sx={{ postion: "relative" }}>
              <CardMedia
                component="img"
                alt="Chobani Creations®"
                style={imgsx}
                srcSet="https://images.ctfassets.net/01to7kbtr3az/5rtPzmJiTudRDP9xwB9zzE/332e35ef31cb057a4383d5f1387f710e/CRMR_header_2560x1440_desktop_v2.jpg"
              />
            </Box>
            <Box sx={wx}>
              <Typography variant="h1">GHI</Typography>
              <Grid sx={{ marginTop: "2rem" }}>
                <Button contained="primary" size="medium" style={oe}>
                  Learn more
                </Button>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </swiper-slide>
    </swiper-container>
  );
};

export default function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxWidth="xl" style={jw}>
      <Paper elevation="0" />
      <Header />
      {MySlider()}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          margin: 0,
          boxSizing: "border-box",
          display: "box",
        }}
      >
        <Grid
          container
          maxWidth="xl"
          style={hht}
          sx={{
            background: "rgb(234,232,225)",
          }}
        >
          <Grid container maxWidth="xl" fixed disableGutters>
            <Grid container style={ah}>
              <Grid item xs={12} sm={6} md={6} style={x0}>
                <Grid
                  item
                  sx={{
                    margin: "auto",
                    maxWidth: "80%",
                    height: "100%",
                  }}
                >
                  <Grid container style={elf}>
                    <Grid item>
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: "3rem",
                          lineHeight: 1,
                          letterSpacing: "-1.5px",
                          margin: 0,
                          display: "block",
                          color: "rgb(27,58,50)",
                        }}
                      >
                        Can we eradicate the ubiquitous nutrient deficiency for
                        all people?
                      </Typography>
                      <Grid
                        item
                        sx={{ minHeight: "20px", maxHeight: "20px" }}
                      ></Grid>
                      <Typography style={font2}>
                        Only 1% of children eat ideal quality diets in the U.S.
                        More than half of adults in the U.S. lack essential
                        nutrients, including 50% of pregnant women and 80% of
                        elderly people.
                        <br />
                        <br />
                        <b>Civil</b> is a maker of food dedicated to building a
                        future in which every person on this planet can properly
                        fuel their bodies and brains. And not only that, but a
                        future in which people feel empowered to take care of
                        themselves, their communities and the planet.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} style={x0}>
                <CardMedia
                  component="img"
                  style={imgsx3}
                  src="https://images.ctfassets.net/01to7kbtr3az/30lPhzly9UkZAMM8RvLMc2/f5aa6d02836a1a6ccd1a87798a4266f5/About_MakingGood_Desktop.png"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          margin: 0,
        }}
      >
        <Container maxWidth="xl" style={wn}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              margin: 0,
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              alt="Everything All At Once"
              style={imgsx2}
              src="https://images.ctfassets.net/01to7kbtr3az/1qBB8DT0vw5hCWueGMp3rQ/18082c9c7302037b49ba1d304a917e5f/Shapingthefuture.svg"
            />
            <Grid item xs={12} sm={12} md={12} style={ru}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{
                  margin: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-anchor-placement="top-bottom"
              >
                <Typography
                  variant="h1"
                  align="center"
                  sx={{
                    fontSize: "2rem",
                    lineHeight: 1,
                    letterSpacing: "-1.5px",
                    display: "block",
                    color: "rgb(244,243,240)",
                    textAlign: "center",
                    maxWidth: "41rem",
                    margin: "auto auto 10px",
                  }}
                >
                  Our Innovation
                </Typography>
                <Typography
                  variant="h1"
                  align="center"
                  sx={{
                    fontSize: "4rem",
                    lineHeight: 1,
                    letterSpacing: "-1.5px",
                    display: "block",
                    color: "rgb(244,243,240)",
                    textAlign: "center",
                    maxWidth: "41rem",
                    margin: "auto auto 50px",
                  }}
                >
                  Everything All At Once
                </Typography>
              </Grid>
              <Grid container style={ur}>
                <Typography variant="h3" style={font1}>
                  <b>Everything All At Once</b> is Civil’s original innovation.
                  When you see this label, it means that the product is designed
                  to provide a complete spectrum of nutrition in every bite,
                  including vital nutrients that are commonly missed in modern
                  diets.
                  <br />
                  <br />
                  All of Civil products are a blend of whole foods and
                  additional nutrients derived from vegetables and fruits.
                </Typography>
                <Grid item sx={{ minHeight: "30px", maxHeight: "30px" }}></Grid>
              </Grid>
              <Grid container style={ur}>
                <Grid item style={d8f}>
                  <Grid container style={xyi}>
                    <Grid item sm={12} md={12} style={a1z}>
                      <Grid container style={nh3}>
                        <Grid item sm={12} md={12} style={a1z}>
                          <CardMedia
                            component="img"
                            alt="Clean ingredients."
                            style={imgsx4}
                            src="https://images.ctfassets.net/01to7kbtr3az/4HXijcinYStxzmKxowkrNU/ad9651ed78d2cc62459e2a9648f88878/Environmental_Zero_waste_to_landfill_A_website.svg"
                          />
                        </Grid>
                        <Grid item sm={12} md={12} style={a1z}>
                          <Typography variant="h3" style={font3}>
                            Clean ingredients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={d8f}>
                  <Grid container style={xyi}>
                    <Grid item sm={12} md={12} style={a1z}>
                      <Grid container style={nh3}>
                        <Grid item sm={12} md={12} style={a1z}>
                          <CardMedia
                            component="img"
                            alt="No synthetic vitamins or minerals ever."
                            style={imgsx4}
                            src="https://images.ctfassets.net/01to7kbtr3az/40F3UTN2tvh9m2aRKNj3Cl/cb9f5675e08f966adabbea6dcee835b8/Social_Strengthening_rural_communities_website.svg"
                          />
                        </Grid>
                        <Grid item sm={12} md={12} style={a1z}>
                          <Typography variant="h3" style={font3}>
                            No synthetic vitamins or minerals ever.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={d8f}>
                  <Grid container style={xyi}>
                    <Grid item sm={12} md={12} style={a1z}>
                      <Grid container style={nh3}>
                        <Grid item sm={12} md={12} style={a1z}>
                          <CardMedia
                            component="img"
                            alt="Designed under both U.S. and European guidelines. "
                            style={imgsx4}
                            src="https://images.ctfassets.net/01to7kbtr3az/zJLIam0ILZb3pWe1ieumR/d5f867b6373ee0fad65b2fef86be07ee/Nutritional_CHO_Shape_Illus_HealthWellness_MoreThanFood_RGB.svg"
                          />
                        </Grid>
                        <Grid item sm={12} md={12} style={a1z}>
                          <Typography variant="h3" style={font3}>
                            Designed under both U.S. and European guidelines.
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
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="xl" style={wn}>
          <Grid container style={uce}>
            <CardMedia
              component="img"
              alt="We Promise to be Civil"
              style={imgsx5}
              src="https://images.ctfassets.net/01to7kbtr3az/5MKSmgsfKzyyCX6fA0B7dS/a9e53e0f09891e769a0ca2f5c4c42d84/Impatct_All3Batches_ImpactLandingLeftBannerDesktop.jpg"
            />
            <Grid xs={12} sm={12} md={12} style={s34}>
              <Grid
                conatiner
                direction="column"
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexFlow: "column wrap",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <Grid item sm={12} md={12} style={a1z}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography variant="h1" style={font4}>
                      We Promise to be Civil
                    </Typography>
                    <Typography variant="p" style={font5}>
                      We make the highest qualify foods with <br />
                      simple, real food ingredients
                      <br />
                      <br />
                      We take care of our employees and communities
                      <br />
                      <br />
                      We work with our planet, not against it
                      <br />
                      <br />
                      We partner with suppliers and partners to create
                      prosperity
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xl"
          style={hht}
          sx={{
            backgroundColor: "rgb(245,233,93)",
          }}
        >
          <Container maxWidth="xl" fixed disableGutters style={orh}>
            <Grid container style={ahj}>
              <Grid item xs={12} sm={6} md={6} style={o2z}>
                <CardMedia
                  component="img"
                  alt="Write to Our CEO"
                  style={imgsx6}
                  src="https://images.ctfassets.net/01to7kbtr3az/1RSx2LyX6I0BmUyHGQywRg/a83f3e556c5c1b50b09af21ed186bf1d/Edesia_Desktop_1340x1100.png"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} style={o2z}>
                <Grid item style={leig}>
                  <Grid container style={elf}>
                    <Grid item>
                      <Typography variant="h1" style={font6}>
                        Write to Our CEO
                      </Typography>
                      <Typography variant="p" style={font7}>
                        We are continually looking for ways to make our company
                        and products even better. If you have any thoughts or
                        feedback, you can write to our CEO directly here.
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        boxSizing: "border-box",
                        flexFlow: "wrap",
                        width: "100%",
                        display: "flex",
                        justifyContent: "left",
                        margin: "auto",
                      }}
                    >
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          href="mailto:"
                          style={email}
                        >
                          Email us
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Grid>
      <Footer />
    </Container>
  );
}
