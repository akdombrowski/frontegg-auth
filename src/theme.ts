import { createTheme } from "@mui/material/styles";
// import { orange, lime, purple } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    title: {
      primary: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    title?: {
      primary?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#06D0C2",
      light: "#AEEBE5",
      dark: "#006953",
      contrastText: "#7B0828",
    },
    secondary: {
      main: "#85FFED",
      light: "#70FFEA",
      dark: "#00E0BF",
      contrastText: "#462749",
    },
    background: {
      default: "#030F11",
      paper: "#061E23",
    },
    text: {
      primary: "#AFFEF6",
    },
    success: {
      main: "#1FFFB0",
      light: "#85FFD4",
      dark: "#00CC85",
      contrastText: "#A6D9F7",
    },
    info: {
      main: "#C2DDFF",
      light: "#E4FEFF",
      dark: "#1F84FF",
      contrastText: "#FFD166",
    },
    warning: {
      main: "#F75200",
      light: "#FFAC8B",
      dark: "#C33500",
      contrastText: "#031927",
    },
    error: {
      main: "#F7002B",
      light: "#FFCAD1",
      dark: "#A30008",
      contrastText: "#B2ECE1",
    },
    divider: "#D7FEF5",
  },
  status: {
    danger: "#FDF6BE",
  },
  title: {
    primary: "#3DFAFF",
    light: "#D6FEFF",
    dark: "#00DDE0",
    contrastText: "#200116",
  },
});

export default theme;
