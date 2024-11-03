import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent = memo(() => {
  return (
    <View style={styles.groupChildPosition}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={[styles.groupWrapper, styles.imageLayout]}>
        <View style={[styles.imageParent, styles.imageLayout]}>
          <Image
            style={[styles.imageIcon, styles.imageLayout]}
            contentFit="cover"
            source={require("../assets/image4.png")}
          />
          <Text style={styles.adirahmaArya}>{`Adirahma Arya `}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 61,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 44,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorFirebrick_100,
  },
  imageIcon: {
    left: 86,
    width: 44,
    top: 0,
  },
  adirahmaArya: {
    top: 14,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.martelSansBold,
    color: Color.colorWhite,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 75,
    height: 17,
    left: 0,
    position: "absolute",
  },
  imageParent: {
    width: 130,
    height: 44,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 8,
    left: 279,
    width: 130,
    height: 44,
  },
});

export default GroupComponent;
