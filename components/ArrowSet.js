import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ArrowSet = memo(() => {
  return (
    <View style={styles.arrow}>
      <Image
        style={[styles.arwspreviousIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/arwsprevious.png")}
      />
      <Image
        style={[styles.arwsnextIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/arwsnext.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  iconPosition: {
    height: 60,
    top: 10,
    position: "absolute",
    overflow: "hidden",
  },
  arwspreviousIcon: {
    left: 18,
    width: 27,
  },
  arwsnextIcon: {
    left: 45,
    width: 28,
  },
  arrow: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: "100%",
    height: 80,
    overflow: "hidden",
  },
});

export default ArrowSet;
