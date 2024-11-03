import * as React from "react";
import { Text, StyleSheet, ScrollView, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import FrameComponent3 from "../components/FrameComponent3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MAINPAGE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainPage}>
      <Text style={styles.resepMakanan}>Resep Makanan</Text>
      <GroupComponent />
      <Pressable
        style={[styles.mainPageInner, styles.resepParentLayout]}
        onPress={() => navigation.navigate("LANGKAHMEMASAK")}
      >
        <View style={[styles.resepParent, styles.resepParentLayout]}>
          <FrameComponent3 image={require("../assets/image5.png")} />
          <FrameComponent3
            onFramePressablePress={() => navigation.navigate("LANGKAHMEMASAK")}
            frameViewLeft={6}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={12}
            frameViewTop={211}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={6}
            frameViewTop={396}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={0}
            frameViewTop={581}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={12}
            frameViewTop={766}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={12}
            frameViewTop={951}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={6}
            frameViewTop={1136}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={12}
            frameViewTop={1321}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={12}
            frameViewTop={1506}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={12}
            frameViewTop={1691}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={211}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={396}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={581}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={766}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={951}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={1136}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={1321}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={1506}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
          <FrameComponent3
            frameViewLeft={202}
            frameViewTop={1691}
            resepPosition="absolute"
            image={require("../assets/image5.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.mainPageChild}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resepParentLayout: {
    width: 380,
    position: "absolute",
  },
  resepMakanan: {
    top: 83,
    left: 119,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  resepParent: {
    top: 0,
    left: 0,
    height: 1876,
  },
  mainPageInner: {
    top: 149,
    left: 25,
    height: 747,
  },
  mainPageChild: {
    top: 20,
    left: 8,
    width: 10,
    height: 0,
    position: "absolute",
  },
  mainPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 928,
    overflow: "hidden",
  },
});

export default MAINPAGE;
