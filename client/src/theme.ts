"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "#AAFF4E",
      main: "#84FF00",
      dark: "#7AEB00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFB99A",
      main: "#FF834C",
      dark: "#FF7538",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "MyFont",
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
