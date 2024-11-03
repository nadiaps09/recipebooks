import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent3 = memo(() => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <Text style={[styles.username, styles.emailTypo]}>Username</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.groupItem, styles.groupLayout]} />
      <View style={[styles.groupInner, styles.groupLayout]} />
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  groupLayout: {
    height: 58,
    width: 336,
    borderWidth: 2,
    borderColor: Color.colorFirebrick_300,
    borderStyle: "solid",
    backgroundColor: Color.colorFirebrick_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  emailTypo: {
    height: 30,
    width: 95,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    left: 1,
    position: "absolute",
  },
  groupChild: {
    top: 29,
    left: -1,
    width: 336,
    borderWidth: 2,
    borderColor: Color.colorFirebrick_300,
    borderStyle: "solid",
    backgroundColor: Color.colorFirebrick_300,
    borderRadius: Border.br_3xs,
  },
  username: {
    top: 0,
  },
  email: {
    top: 93,
  },
  groupItem: {
    top: 122,
    left: 0,
  },
  groupInner: {
    top: 214,
    left: -1,
    width: 336,
    borderWidth: 2,
    borderColor: Color.colorFirebrick_300,
    borderStyle: "solid",
    backgroundColor: Color.colorFirebrick_300,
    borderRadius: Border.br_3xs,
  },
  password: {
    top: 185,
  },
  rectangleParent: {
    top: 377,
    left: 47,
    width: 335,
    height: 271,
    position: "absolute",
  },
});

export default GroupComponent3;
