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

const cf = {
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
  cursor: "auto",
  backgroundColor: "rgb(250,250,250)",
  overflow: "clip",
};

const q8 = {
  maxWidth: "94%",
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "100%",
  margin: "10px auto 60px",
  backgroundColor: "rgb(250,250,250)",
};

const soy = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  marginTop: "60px",
  width: "85%",
};

const s0 = {
  flexBasis: "83.3333%",
  flexGrow: 0,
  maxWidth: "83.33333%",
  boxSizing: "border-box",
  margin: 0,
};

const font1 = {
  fontSize: "5rem",
  lineHeight: 1,
  letterSpacing: "-1.5px",
  margin: 0,
  color: "rgb(26,60,52)",
  boxSizing: "border-box",
};

const ilx = {
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "wrap",
  width: "85%",
  marginTop: "20px",
};

const he = {
  flexBasis: "100%",
  flexGrow: 0,
  maxWidth: "100%",
};

const font2 = {
  fontSize: "1rem",
  lineHeight: 1.3,
  letterSpacing: "-0.2px",
  margin: 0,
  color: "rgb(19,45,38)",
  boxSizing: "border-box",
};

export default function Disclaimer() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxWidth="xl" style={jw}>
      <Paper elevation="0" />
      <Header />
      <Container maxWidth="xl" disableGutters style={cf}>
        <Grid container style={q8}>
          <Grid container style={soy}>
            <Grid item md={10} style={s0}>
              <Typography variant="h1" style={font1}>
                Disclaimer
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={ilx}>
            <Grid item xs={12} sm={12} md={12} xl={8.4} style={he}>
              <Typography variant="p" style={font2}>
                Civil is a maker of foods, not medicine or supplements. Civil
                products are not intended for use in the diagnosis, cure,
                mitigation, treatment, or prevention of disease Civil products
                are not FDA approved. It’s important to talk to your provider
                about any supplements you take.
                <br />
                <br />
                All information in Pachamama Foods Inc. website and digital
                products is intended for general knowledge only and is not to be
                used as a dietary or nutritional plan or as a substitute for
                medical advice, prevention, treatment, or cure for a specific
                medical condition. Nutrient amounts are based on Recommended
                Dietary Allowance set by Institute of Medicine (US) and may
                differ from other countries. Any application of the
                recommendations set forth in this website from Pachamama Foods
                Inc. or in communication by email is at the reader's discretion
                and sole risk. Pachamama Foods Inc. is not responsible for any
                liability as a result of the interpretation of nutrition
                information available in the website or any communication from
                Pachamama Foods Inc. Consult with your healthcare provider for
                any medical care and/or before starting any lifestyle change or
                dietary supplement for yourself or a child in your care.
                <br />
                <br />
                All rights reserved. No part of this publication may be
                reproduced, distributed, or transmitted in any form or by any
                means, including photocopying, recording, or other electronic or
                mechanical methods, without the prior written permission of the
                author, except in the case of brief quotations embodied in
                critical reviews and certain other noncommercial uses permitted
                by copyright law.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Container>
  );
}
