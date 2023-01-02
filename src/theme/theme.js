import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#111430",
      yellow: "#FBD062",
      green: "#7AB259",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl", // 1200
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "0.5rem 1.5rem",
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
        // disableRipple: true,
      },
    },
  },
});
