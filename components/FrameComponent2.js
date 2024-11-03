import React, { useMemo, memo } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent2 = memo(
  ({
    langkah = "step 1",
    frameScrollViewPosition,
    frameScrollViewFlex,
    frameScrollViewTop,
    frameScrollViewLeft,
    potongPotongDagingDanKikil,
    image,
    image1,
    frame34,
    frame37,
    image2,
    image3,
  }) => {
    const langkahstep1Style = useMemo(() => {
      return {
        ...getStyleValue("position", frameScrollViewPosition),
        ...getStyleValue("flex", frameScrollViewFlex),
        ...getStyleValue("top", frameScrollViewTop),
        ...getStyleValue("left", frameScrollViewLeft),
      };
    }, [
      frameScrollViewPosition,
      frameScrollViewFlex,
      frameScrollViewTop,
      frameScrollViewLeft,
    ]);

    const getRectangleStyle = () => {
      if (langkah === "step 9") return styles.rectangleVar;
    };
    const getImage1Style = () => {
      if (langkah === "step 9") return styles.image1Var;
    };
    const getLoadImageStyle = () => {
      if (langkah === "step 9") return styles.loadImageVar;
    };
    const getArrowImageStyle = () => {
      if (langkah === "step 9") return styles.arrowImageVar;
    };

    return (
      <ScrollView style={[styles.root, langkahstep1Style]}>
        <View style={styles.groupChildPosition}>
          <View
            style={[
              styles.groupChild,
              getRectangleStyle(),
              styles.groupChildPosition,
            ]}
          />
          <Text style={styles.potongPotongDaging}>
            {potongPotongDagingDanKikil}
          </Text>
          <Image
            style={[styles.imageIcon, styles.imageIconPosition]}
            contentFit="cover"
            source={image2}
          />
          <Image
            style={[
              styles.imageIcon1,
              getImage1Style(),
              styles.imageIconPosition,
            ]}
            contentFit="cover"
            source={image3}
          />
        </View>
        <Image
          style={[styles.loadIcon, getLoadImageStyle()]}
          contentFit="cover"
          source={frame34}
        />
        <Image
          style={[styles.arrowIcon, getArrowImageStyle()]}
          contentFit="cover"
          source={frame37}
        />
      </ScrollView>
    );
  }
);

const styles = StyleSheet.create({
  rectangleVar: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  image1Var: {
    top: null,
    left: "50%",
    width: 164,
    height: 20,
    marginLeft: -72,
    bottom: 12,
  },
  loadImageVar: {
    marginLeft: null,
    bottom: 60,
    left: null,
    width: 31,
    height: null,
    top: 89,
    right: 18,
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowImageVar: {
    top: 83,
    left: 10,
  },
  groupChildPosition: {
    width: 386,
    left: 0,
    top: 0,
    height: 203,
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
  potongPotongDaging: {
    top: 12,
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
  loadIcon: {
    marginLeft: -79,
    bottom: 8,
    left: "50%",
    width: 164,
    height: 20,
    position: "absolute",
  },
  arrowIcon: {
    top: 80,
    left: 348,
    width: 27,
    height: 60,
    overflow: "hidden",
    position: "absolute",
  },
  root: {
    top: 20,
    left: 20,
    width: "100%",
    maxHeight: 203,
    height: 203,
    position: "absolute",
  },
});

export default FrameComponent2;
