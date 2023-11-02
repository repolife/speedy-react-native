import React from "react";
import { Tab, Text, TabView, makeStyles } from "@rneui/themed";
import { View, Button } from "react-native";
import { Music } from "../../Music/Music";
import { Support } from "../../Support/Support";
const useStyles = makeStyles(() => ({
  tabView: {
    alignContent: "center",
  },
  tabViewItem: {
    width: "100%",
    paddingTop: 15,
    display: "flex",

    flex: 1,
  },
  text: { color: "white" },
}));

export const Menu = () => {
  const [index, setIndex] = React.useState(0);
  const styles = useStyles();

  return (
    <>
      <TabView value={index} onChange={setIndex} animationType="spring" style={styles.tabView}>
        <TabView.Item style={styles.tabViewItem} containterStyle={{ display: "flex" }}>
          <View>
            <Text h1 style={styles.text}>
              Music
            </Text>

            <Music />
          </View>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <View>
            <Text h1 style={styles.text}>
              Support
            </Text>
            <Support />
          </View>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <View>
            <Text h1 style={styles.text}>
              Social
            </Text>
            <Text h3 style={styles.text}>
              Music
            </Text>
          </View>
        </TabView.Item>
      </TabView>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#8c6821",
        }}
        variant="black"
      >
        <Tab.Item title="Music" icon={{ name: "musical-notes-outline", type: "ionicon", color: "white" }} />
        <Tab.Item title="Support" icon={{ name: "gift-outline", type: "ionicon", color: "white" }} />
        <Tab.Item title="Social" icon={{ name: "people-circle-outline", type: "ionicon", color: "white" }} />
      </Tab>
    </>
  );
};
