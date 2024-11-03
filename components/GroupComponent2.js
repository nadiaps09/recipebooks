import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent2 = memo(() => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <Text style={[styles.namaLengkap, styles.emailTypo]}>Nama Lengkap</Text>
      <View style={[styles.groupItem, styles.emailPosition]} />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.email, styles.emailPosition]}>Email</Text>
      <View style={[styles.groupInner, styles.groupLayout]} />
      <View style={[styles.rectangleView, styles.emailPosition]} />
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
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
  },
  emailPosition: {
    left: 0,
    position: "absolute",
  },
  usernameTypo: {
    left: 2,
    height: 30,
    width: 95,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
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
    position: "absolute",
  },
  namaLengkap: {
    top: 0,
    left: 1,
    position: "absolute",
  },
  groupItem: {
    top: 124,
    height: 58,
    width: 336,
    borderWidth: 2,
    borderColor: Color.colorFirebrick_300,
    borderStyle: "solid",
    backgroundColor: Color.colorFirebrick_300,
    borderRadius: Border.br_3xs,
  },
  username: {
    top: 95,
  },
  email: {
    top: 190,
    height: 30,
    width: 95,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  groupInner: {
    top: 219,
    left: -1,
    width: 336,
    borderWidth: 2,
    borderColor: Color.colorFirebrick_300,
    borderStyle: "solid",
    backgroundColor: Color.colorFirebrick_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleView: {
    top: 314,
    height: 58,
    width: 336,
    borderWidth: 2,
    borderColor: Color.colorFirebrick_300,
    borderStyle: "solid",
    backgroundColor: Color.colorFirebrick_300,
    borderRadius: Border.br_3xs,
  },
  password: {
    top: 285,
  },
  rectangleParent: {
    top: 348,
    left: 49,
    width: 335,
    height: 371,
    position: "absolute",
  },
});

export default GroupComponent2;
