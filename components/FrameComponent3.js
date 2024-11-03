import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Klikbutton from "./Klikbutton";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent3 = memo(
  ({
    onFramePressablePress,
    frameViewLeft,
    frameViewTop,
    resepPosition,
    image,
    resepFlex,
  }) => {
    const resepStyle = useMemo(() => {
      return {
        ...getStyleValue("left", frameViewLeft),
        ...getStyleValue("top", frameViewTop),
        ...getStyleValue("position", resepPosition),
        ...getStyleValue("flex", resepFlex),
      };
    }, [frameViewLeft, frameViewTop, resepPosition, resepFlex]);

    return (
      <View style={[styles.resep, resepStyle]} onPress={onFramePressablePress}>
        <Image style={styles.imageIcon} contentFit="cover" source={image} />
        <Text style={styles.sotoBetawi}>Soto Betawi</Text>
        <Text style={[styles.mnt, styles.mntTypo]}>60 mnt</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.indonesian, styles.mntTypo]}>Indonesian</Text>
        </View>
        <Image
          style={styles.timeIcon}
          contentFit="cover"
          source={require("../assets/time.png")}
        />
        <Klikbutton
          button="klikmsk"
          klikbuttonBottom={7}
          klikbuttonLeft="50%"
          klikbuttonTop="unset"
          klikbuttonWidth={83}
          klikbuttonHeight={22}
          klikbuttonMarginTop="unset"
          registrasi="mulai masak"
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  mntTypo: {
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    height: 17,
    width: 65,
    position: "absolute",
  },
  imageIcon: {
    top: 16,
    left: 17,
    borderRadius: Border.br_3xs,
    width: 143,
    height: 80,
    position: "absolute",
  },
  sotoBetawi: {
    top: 96,
    left: 39,
    fontSize: FontSize.size_mini,
    fontWeight: "900",
    fontFamily: FontFamily.martelSansBlack,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  mnt: {
    top: 129,
    left: 117,
    width: 35,
    height: 11,
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorFirebrick_300,
    top: 0,
  },
  indonesian: {
    marginLeft: -27.5,
    top: 5,
    left: "50%",
    width: 56,
    height: 9,
  },
  rectangleParent: {
    top: 126,
    left: 22,
  },
  timeIcon: {
    top: 127,
    left: 100,
    width: 15,
    height: 15,
    position: "absolute",
  },
  resep: {
    left: 202,
    width: 178,
    height: 185,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
});

export default FrameComponent3;
