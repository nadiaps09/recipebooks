import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = memo(
  ({ frameViewTop, deliveryTime, deliveryTimeIconLeft }) => {
    const frameViewStyle = useMemo(() => {
      return {
        ...getStyleValue("top", frameViewTop),
      };
    }, [frameViewTop]);

    const deliveryTimeIconStyle = useMemo(() => {
      return {
        ...getStyleValue("left", deliveryTimeIconLeft),
      };
    }, [deliveryTimeIconLeft]);

    return (
      <View style={[styles.rectangleParent, frameViewStyle]}>
        <View style={styles.frameChild} />
        <Text style={styles.sotoBetawi}>Soto Betawi</Text>
        <Text style={[styles.mnt, styles.mntTypo]}>60 mnt</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.orangPosition]} />
          <Text style={[styles.indonesian, styles.mntTypo]}>Indonesian</Text>
        </View>
        <Image
          style={styles.timeIcon}
          contentFit="cover"
          source={require("../assets/time.png")}
        />
        <View style={[styles.groupParent, styles.personIconLayout]}>
          <View style={[styles.orangWrapper, styles.orangLayout]}>
            <Text style={[styles.orang, styles.orangLayout]}>2 orang</Text>
          </View>
          <Image
            style={[styles.personIcon, styles.personIconLayout]}
            contentFit="cover"
            source={require("../assets/person.png")}
          />
        </View>
        <Image
          style={[styles.deliveryTimeIcon, deliveryTimeIconStyle]}
          contentFit="cover"
          source={deliveryTime}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  mntTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  groupLayout: {
    height: 17,
    width: 65,
    position: "absolute",
  },
  orangPosition: {
    top: 0,
    left: 0,
  },
  personIconLayout: {
    height: 16,
    position: "absolute",
  },
  orangLayout: {
    height: 14,
    width: 46,
    position: "absolute",
  },
  frameChild: {
    left: 16,
    backgroundColor: Color.colorGainsboro,
    width: 85,
    height: 85,
    top: 20,
    position: "absolute",
  },
  sotoBetawi: {
    left: 107,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kaushanScriptRegular,
    width: 82,
    textAlign: "center",
    color: Color.colorBlack,
    top: 20,
    position: "absolute",
  },
  mnt: {
    top: 50,
    left: 207,
    width: 35,
    height: 11,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mini,
    height: 17,
    width: 65,
    position: "absolute",
    backgroundColor: Color.colorFirebrick_200,
  },
  indonesian: {
    marginLeft: -27.5,
    top: 5,
    left: "50%",
    width: 56,
    height: 9,
    position: "absolute",
  },
  rectangleGroup: {
    top: 47,
    left: 112,
  },
  timeIcon: {
    top: 48,
    left: 190,
    width: 15,
    height: 15,
    position: "absolute",
  },
  orang: {
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  orangWrapper: {
    top: 2,
    left: 13,
  },
  personIcon: {
    width: 14,
    top: 0,
    left: 0,
  },
  groupParent: {
    top: 71,
    width: 59,
    left: 112,
  },
  deliveryTimeIcon: {
    top: 42,
    left: 300,
    width: 40,
    height: 40,
    position: "absolute",
  },
  rectangleParent: {
    top: 143,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    width: 370,
    height: 124,
    overflow: "hidden",
    backgroundColor: Color.colorFirebrick_200,
    left: 0,
    position: "absolute",
  },
});

export default FrameComponent;
