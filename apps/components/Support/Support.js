import React, { useCallback } from "react";
import { Linking, Button, View } from "react-native";
import { Text } from "@rneui/themed";

export const Support = () => {
  const openPayPal = useCallback(async () => {
    await Linking.openURL(
      "https://www.paypal.com/donate/?business=M237KGDVVSNV2&no_recurring=0&item_name=I+have+never+broke+even+or+made+a+profit+from+any+of+my+music+ventures.+%0APlease+help+fund+my+upcoming+music.+&currency_code=USD"
    );
  }, []);

  return (
    <View
      style={{
        paddingTop: "10%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Text span style={{ color: "white" }}>
        If you appreicate the music I'm creating then please consider donating so that I can fund future music ventures.
        I promise to keep based on scripture. I've never broke even on any of my projects so this would make it possible
        for me to release music consistantly.
      </Text>
      <Button title="Donate on paypal" type="outline" onPress={openPayPal} color="gold" />
    </View>
  );
};
