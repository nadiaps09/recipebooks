import React, { memo } from "react";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent1 = memo(({ klikMulaiMasak = "Default" }) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.instanceChild} />
      <Text style={styles.mulaiMasak}>mulai masak</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 3,
    backgroundColor: Color.colorFirebrick_100,
    position: "absolute",
    width: "100%",
  },
  mulaiMasak: {
    height: "61.9%",
    width: "81.82%",
    top: "19.05%",
    left: "9.09%",
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.martelSansSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    height: 21,
    width: "100%",
  },
});

export default GroupComponent1;
