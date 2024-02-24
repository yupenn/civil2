import Link from "@mui/material/Link";
import NextLink from "next/link";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Caprasimo } from "next/font/google";
const caprasimo = Caprasimo({ subsets: ["latin"], weight: ["400"] });

const footerSS = {
  lineHeight: 1.3,
  letterSpacing: "-.2px",
  m: 0,
  color: "#EAE8E1",
  fontSize: "0.9rem",
  textTransform: "capitalize",
};

const footerGSS = {
  boxSizing: "border-box",
  flexWrap: "wrap",
  flexDirection: "column",
  mt: "-8px",
  width: "calc(100% + 8px)",
  ml: "-8px",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "flex-start",
  alignItems: "flex-start",
};

const footerSSS = {
  lineHeight: 1,
  letterSpacing: 0,
  m: 0,
  color: "#8D9C98",
  fontSize: "0.75rem",
  textTransform: "capitalize",
};

const footerDD = {
  color: "#8D9C98",
  m: "0rem 0.5rem",
  width: "fit-content",
  alignItems: "center",
  display: "flex",
};

export default function Footer() {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      sx={{
        boxSizing: "border-box",
        m: 0,
      }}
    >
      <Grid
        container
        sx={{
          boxSizing: "border-box",
          width: "100%",
          display: "block",
          flexWrap: "wrap",
          width: "100%",
          m: "0px",
          p: 0,
          backgroundColor: "#1A3C34",
          cursor: "auto",
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Grid
            item
            spacing={1}
            sx={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              mt: "-8px",
              width: "calc(100% + 8px)",
              alignItems: "flex-start",
              width: "100%",
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
                pl: "8px",
                pt: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#EAE8E1",
                  display: "block",
                  m: 2,
                  fontFamily: caprasimo.style.fontFamily,
                  textAlign: "center",
                }}
              >
                A DELICIOUS EVOLUTION TO EMPOWER A FUTURE OF SUSTAINABLE AND
                EQUITABLE NUTRITION FOR ALL
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            spacing={2}
            sx={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              width: "calc(100% + 16px)",
              ml: "-16px",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                pl: "16px",
                flexBasis: "100%",
                flexGrow: 0,
                maxWidth: "100%",
              }}
            >
              <Typography sx={footerSSS} align="center">
                {"Copyright © "}
                {new Date().getFullYear()}{" "}
                <MuiLink color="inherit" href="https://civilsnacks.com/">
                  Pachamama Creations, Inc.
                </MuiLink>{" "}
                All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
