import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Klikbutton = memo(
  ({
    button = "register",
    onKlikbuttonPress,
    klikbuttonBottom,
    klikbuttonLeft,
    klikbuttonTop,
    klikbuttonWidth,
    klikbuttonHeight,
    klikbuttonMarginTop,
    registrasi,
  }) => {
    const klikbuttonStyle = useMemo(() => {
      return {
        ...getStyleValue("bottom", klikbuttonBottom),
        ...getStyleValue("left", klikbuttonLeft),
        ...getStyleValue("top", klikbuttonTop),
        ...getStyleValue("width", klikbuttonWidth),
        ...getStyleValue("height", klikbuttonHeight),
        ...getStyleValue("marginTop", klikbuttonMarginTop),
      };
    }, [
      klikbuttonBottom,
      klikbuttonLeft,
      klikbuttonTop,
      klikbuttonWidth,
      klikbuttonHeight,
      klikbuttonMarginTop,
    ]);

    const navigation = useNavigation();
    const getKlikbuttonContainerStyle = () => {
      if (button === "login") return styles.klikbuttonContainerVar;
      if (button === "memasak") return styles.klikbuttonContainerVar;
      if (button === "selesai") return styles.klikbuttonContainerVar;
      if (button === "lain") return styles.klikbuttonContainerVar;
      if (button === "klikmsk") return styles.klikbuttonContainerVar;
    };
    const getRectangleStyle = () => {
      if (button === "klikmsk") return styles.rectangleVar;
    };
    const getRegistrasiTextStyle = () => {
      if (button === "memasak") return styles.registrasiTextVar;
      if (button === "selesai") return styles.registrasiTextVar;
      if (button === "lain") return styles.registrasiTextVar;
      if (button === "klikmsk") return styles.registrasiTextVar1;
    };

    return (
      <Pressable
        style={[styles.root, getKlikbuttonContainerStyle(), klikbuttonStyle]}
        onPress={onKlikbuttonPress}
      >
        <View style={[styles.klikbuttonChild, getRectangleStyle()]} />
        <Text style={[styles.registrasi, getRegistrasiTextStyle()]}>
          {registrasi}
        </Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  klikbuttonContainerVar: {
    marginLeft: null,
  },
  rectangleVar: {
    borderRadius: Border.br_8xs,
  },
  registrasiTextVar: {
    height: "52.67%",
    width: "70.04%",
    top: "23.78%",
    left: "14.98%",
    fontSize: FontSize.size_xl,
  },
  registrasiTextVar1: {
    height: "52.73%",
    width: "70%",
    top: "23.64%",
    left: "14.94%",
    fontSize: FontSize.size_3xs,
  },
  klikbuttonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFirebrick_100,
    position: "absolute",
  },
  registrasi: {
    height: "52.71%",
    width: "70.05%",
    top: "23.73%",
    left: "14.97%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.aleoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  root: {
    marginLeft: -94,
    bottom: 73,
    left: "50%",
    width: 187,
    height: 59,
    position: "absolute",
  },
});

export default Klikbutton;
