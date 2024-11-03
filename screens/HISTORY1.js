import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import Klikbutton from "../components/Klikbutton";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HISTORY1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.history, styles.iconLayout]}>
      <GroupComponent />
      <ScrollView style={[styles.historyInner, styles.frameParentLayout]}>
        <View style={[styles.historyMasakanParent, styles.frameParentLayout]}>
          <Text style={[styles.historyMasakan, styles.sedangDimasakTypo]}>
            History Masakan
          </Text>
          <Text style={[styles.sedangDimasak, styles.sedangDimasakTypo]}>
            Sedang Dimasak
          </Text>
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <Pressable
              style={[styles.rectangleParent, styles.groupChildPosition]}
              onPress={() => navigation.navigate("LANGKAHMEMASAK")}
            >
              <View style={[styles.frameChild, styles.frameChildPosition]} />
              <Text style={[styles.sotoBetawi, styles.frameChildPosition]}>
                Soto Betawi
              </Text>
              <Text style={[styles.mnt, styles.mntTypo]}>60 mnt</Text>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <Text style={[styles.indonesian, styles.mntTypo]}>
                  Indonesian
                </Text>
              </View>
              <Image
                style={styles.timeIcon}
                contentFit="cover"
                source={require("../assets/time.png")}
              />
              <View style={[styles.groupParent, styles.personIconLayout]}>
                <View style={[styles.orangWrapper, styles.orangLayout]}>
                  <Text style={[styles.orang, styles.orangLayout]}>
                    2 orang
                  </Text>
                </View>
                <Image
                  style={[styles.personIcon, styles.personIconLayout]}
                  contentFit="cover"
                  source={require("../assets/person.png")}
                />
              </View>
              <Image
                style={styles.deliveryTimeIcon}
                contentFit="cover"
                source={require("../assets/delivery-time.png")}
              />
            </Pressable>
            <FrameComponent
              deliveryTime={require("../assets/delivery-time.png")}
            />
            <FrameComponent
              frameViewTop={286}
              deliveryTime={require("../assets/delivery-time.png")}
              deliveryTimeIconLeft={301}
            />
            <View style={[styles.frameGroup, styles.frameParentLayout]}>
              <FrameComponent
                frameViewTop={0}
                deliveryTime={require("../assets/checkmark.png")}
                deliveryTimeIconLeft={302}
              />
              <FrameComponent
                frameViewTop={143}
                deliveryTime={require("../assets/checkmark.png")}
                deliveryTimeIconLeft={302}
              />
              <FrameComponent
                frameViewTop={286}
                deliveryTime={require("../assets/checkmark.png")}
                deliveryTimeIconLeft={302}
              />
              <FrameComponent
                frameViewTop={429}
                deliveryTime={require("../assets/checkmark.png")}
                deliveryTimeIconLeft={302}
              />
              <FrameComponent
                frameViewTop={572}
                deliveryTime={require("../assets/checkmark.png")}
                deliveryTimeIconLeft={302}
              />
              <FrameComponent
                frameViewTop={715}
                deliveryTime={require("../assets/checkmark.png")}
                deliveryTimeIconLeft={302}
              />
              <FrameComponent
                frameViewTop={858}
                deliveryTime={require("../assets/checkmark.png")}
                deliveryTimeIconLeft={302}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Klikbutton
        button="lain"
        onKlikbuttonPress={() => navigation.navigate("MAINPAGE")}
        klikbuttonBottom="unset"
        klikbuttonLeft={91}
        klikbuttonTop={834}
        klikbuttonWidth={247}
        klikbuttonHeight={45}
        klikbuttonMarginTop="unset"
        registrasi="Lihat resep lain"
      />
      <Pressable
        style={styles.arrow}
        onPress={() => navigation.navigate("MAINPAGE")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentLayout: {
    width: 370,
    position: "absolute",
  },
  sedangDimasakTypo: {
    height: 30,
    width: 196,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.martelSansBlack,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    left: 8,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.colorFirebrick_200,
    left: 0,
    top: 0,
  },
  frameChildPosition: {
    top: 20,
    position: "absolute",
  },
  mntTypo: {
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
  },
  groupLayout: {
    height: 17,
    width: 65,
    position: "absolute",
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
  historyMasakan: {
    top: 507,
  },
  sedangDimasak: {
    top: 0,
  },
  frameChild: {
    left: 16,
    backgroundColor: Color.colorGainsboro,
    width: 85,
    height: 85,
  },
  sotoBetawi: {
    left: 107,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kaushanScriptRegular,
    width: 82,
    textAlign: "center",
    color: Color.colorBlack,
    top: 20,
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
    backgroundColor: Color.colorFirebrick_200,
    left: 0,
    top: 0,
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
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    top: 0,
  },
  orangWrapper: {
    top: 2,
    left: 13,
  },
  personIcon: {
    width: 14,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 71,
    width: 59,
    left: 112,
  },
  deliveryTimeIcon: {
    top: 42,
    left: 301,
    width: 40,
    height: 40,
    position: "absolute",
  },
  rectangleParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    height: 124,
    width: 370,
    position: "absolute",
    overflow: "hidden",
  },
  frameGroup: {
    height: 982,
    top: 507,
    left: 0,
  },
  frameParent: {
    top: 49,
    height: 1489,
    left: 0,
  },
  historyMasakanParent: {
    height: 1538,
    left: 0,
    top: 0,
  },
  historyInner: {
    top: 94,
    left: 30,
    maxWidth: 370,
    flex: 1,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow: {
    width: 48,
    height: 60,
    left: 0,
    top: 0,
    position: "absolute",
  },
  history: {
    backgroundColor: Color.colorWhite,
    height: 928,
    overflow: "hidden",
    flex: 1,
  },
});

export default HISTORY1;
