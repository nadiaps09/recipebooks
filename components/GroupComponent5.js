import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent5 = memo(() => {
  return (
    <View style={styles.groupChildPosition}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={styles.beriAirDan}>Beri air dan masukkan bumbu kering</Text>
      <Image
        style={[styles.imageIcon, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image10.png")}
      />
      <Image
        style={[styles.imageIcon1, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image3.png")}
      />
      <Image
        style={[styles.imageIcon1, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image11.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 203,
    width: 386,
    left: 0,
    top: 0,
    position: "absolute",
  },
  imageIconPosition: {
    height: 80,
    top: 76,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  beriAirDan: {
    top: 26,
    left: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.martelSansRegular,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 326,
    position: "absolute",
  },
  imageIcon: {
    left: 46,
    width: 134,
  },
  imageIcon1: {
    left: 197,
    width: 142,
  },
});

export default GroupComponent5;
