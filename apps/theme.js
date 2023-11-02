import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  components: {
    TabItem: {
      titleStyle: {
        fontSize: 12,
        marginBottom: "15%",
        color: "white",
      },
    },
  },
});

export default theme;
