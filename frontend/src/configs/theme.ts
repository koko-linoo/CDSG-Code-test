import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Verdana, sans-serif",
  // primaryColor: "violet",
  components: {
    Button: {
      defaultProps: {
        size: "xs",
      },
    },
  },
});
