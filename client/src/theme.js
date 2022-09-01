import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#F5F5F5",
      200: "#424FFF",
      300: "#5631E8",
      400: "#316DE8",
      500: "#36ADFF",
    },
    white: {
      100: "rgb(250, 250, 250, 0.8)",
      200: "#F5F5F5",
    },
    black: {
      100: "rgb(0, 0, 0, 0.8)",
    },
  },
  fonts: {
    color: "#F5F5F5",
    heading: `'Teko', 'Open Sans', sans-serif`,
    body: `'Quicksand', sans-serif`,
  },
});

export default theme;
