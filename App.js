import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, AppRegistry } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./apps/theme";
import { ThemeProvider } from "@rneui/themed";
import { Menu } from "./apps/components/AppConfiguration/Menu/Menu";
import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 50,
  },
}));

export default function App() {
  const styles = useStyles();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Menu />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    width: "100%",
  },
});
