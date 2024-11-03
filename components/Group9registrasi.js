import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Group9registrasi = memo(
  ({ clickButton = "Registrasi", group9registrasiWidth, registrasi }) => {
    const group9registrasiStyle = useMemo(() => {
      return {
        ...getStyleValue("width", group9registrasiWidth),
      };
    }, [group9registrasiWidth]);

    return (
      <View style={[styles.group9registrasi, group9registrasiStyle]}>
        <View style={styles.group9registrasiChild} />
        <Text style={styles.registrasi}>{registrasi}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  group9registrasiChild: {
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
    height: "54.56%",
    width: "70.81%",
    top: "22.81%",
    left: "15.14%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.aleoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  group9registrasi: {
    top: 36,
    left: 5,
    width: 185,
    height: 57,
    position: "absolute",
  },
});

export default Group9registrasi;
