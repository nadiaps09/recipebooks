import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent4 = memo(() => {
  return (
    <View style={styles.groupChildPosition}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow4.png")}
      />
      <Text style={styles.masukkanDagingDan}>
        Masukkan daging dan kentang goreng
      </Text>
      <Image
        style={[styles.imageIcon, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image16.png")}
      />
      <Image
        style={[styles.imageIcon1, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image17.png")}
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
  arrowIcon: {
    left: 352,
    width: 27,
    height: 60,
    overflow: "hidden",
    top: 76,
    position: "absolute",
  },
  masukkanDagingDan: {
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
    left: 47,
    width: 134,
  },
  imageIcon1: {
    left: 197,
    width: 142,
  },
});

export default GroupComponent4;
