import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoadSet = memo(() => {
  return (
    <View style={styles.load}>
      <Image
        style={[styles.stepbarstp1Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/frame-37.png")}
      />
      <Image
        style={[styles.stepbarstp2Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/load.png")}
      />
      <Image
        style={[styles.stepbarstp3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/load1.png")}
      />
      <Image
        style={[styles.stepbarstp4Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/load2.png")}
      />
      <Image
        style={[styles.stepbarstp5Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/load3.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  iconPosition1: {
    height: 20,
    width: 164,
    left: "50%",
    top: "50%",
    marginLeft: -83,
    position: "absolute",
  },
  iconPosition: {
    left: 20,
    height: 20,
    width: 164,
    position: "absolute",
  },
  stepbarstp1Icon: {
    marginTop: -82,
  },
  stepbarstp2Icon: {
    marginTop: -46,
  },
  stepbarstp3Icon: {
    top: 89,
  },
  stepbarstp4Icon: {
    top: 125,
  },
  stepbarstp5Icon: {
    top: 164,
  },
  load: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: "100%",
    height: 204,
    overflow: "hidden",
  },
});

export default LoadSet;
