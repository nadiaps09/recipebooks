import React, { useMemo, memo } from "react";
import { useNavigation } from "@react-navigation/native";
import Group9registrasi from "./Group9registrasi";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = memo(
  ({
    clickButton = "Registrasi",
    framePressableTop,
    framePressableLeft,
    onFramePressablePress,
    framePressableWidth,
    framePressableHeight,
  }) => {
    const framePressableStyle = useMemo(() => {
      return {
        ...getStyleValue("top", framePressableTop),
        ...getStyleValue("left", framePressableLeft),
        ...getStyleValue("width", framePressableWidth),
        ...getStyleValue("height", framePressableHeight),
      };
    }, [
      framePressableTop,
      framePressableLeft,
      framePressableWidth,
      framePressableHeight,
    ]);

    const navigation = useNavigation();

    return (
      <Pressable
        style={[styles.group9registrasiParent, framePressableStyle]}
        onPress={onFramePressablePress}
      >
        <Group9registrasi clickButton="Registrasi" registrasi="Registrasi" />
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  group9registrasiParent: {
    flex: 1,
    width: "100%",
    height: 129,
  },
});

export default FrameComponent1;
