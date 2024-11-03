import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Klikbutton from "../components/Klikbutton";
import FrameComponent2 from "../components/FrameComponent2";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LANGKAH = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.langkah2, styles.iconLayout]}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Text
          style={[styles.adirahmaArya, styles.adirahmaAryaFlexBox]}
        >{`Adirahma Arya `}</Text>
        <Pressable
          style={styles.arrow}
          onPress={() => navigation.navigate("LANGKAHMEMASAK")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.imageIcon1}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <Text style={[styles.sotoBetawi, styles.sotoBetawiFlexBox]}>
        Soto Betawi
      </Text>
      <Text style={[styles.langkahMemasak, styles.sotoBetawiFlexBox]}>
        Langkah memasak:
      </Text>
      <Klikbutton
        button="selesai"
        onKlikbuttonPress={() => navigation.navigate("HISTORY1")}
        klikbuttonBottom={139}
        klikbuttonLeft="50%"
        klikbuttonTop="unset"
        klikbuttonWidth={247}
        klikbuttonHeight={45}
        klikbuttonMarginTop="unset"
        registrasi="Selesai masak"
      />
      <FrameComponent2
        langkah="step 1"
        frameScrollViewPosition="absolute"
        frameScrollViewTop={414}
        frameScrollViewLeft={22}
        potongPotongDagingDanKikil="Potong potong daging dan kikil yg sudah di rebus"
        frame34={require("../assets/frame-37.png")}
        frame37={require("../assets/arrow1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupChildPosition: {
    height: 61,
    width: 430,
    top: 0,
    left: 0,
    position: "absolute",
  },
  adirahmaAryaFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  sotoBetawiFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorFirebrick_100,
  },
  imageIcon: {
    top: 8,
    left: 365,
    width: 44,
    height: 44,
    position: "absolute",
  },
  adirahmaArya: {
    top: 22,
    left: 279,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.martelSansBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 75,
    height: 17,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrow: {
    top: 1,
    width: 48,
    height: 60,
    left: 0,
    position: "absolute",
  },
  imageIcon1: {
    top: 151,
    left: 67,
    borderRadius: Border.br_3xs,
    width: 295,
    height: 149,
    position: "absolute",
  },
  sotoBetawi: {
    top: 72,
    left: 140,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  langkahMemasak: {
    top: 356,
    left: 22,
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    fontFamily: FontFamily.martelSansBlack,
    justifyContent: "center",
    width: 216,
    height: 36,
    alignItems: "center",
    display: "flex",
  },
  langkah2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
  },
});

export default LANGKAH;
