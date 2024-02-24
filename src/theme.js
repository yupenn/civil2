"use client";
import { Noto_Serif } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: notoSerif.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
