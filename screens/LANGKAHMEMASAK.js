import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Klikbutton from "../components/Klikbutton";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const LANGKAHMEMASAK = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.langkahMemasak, styles.iconLayout]}>
      <View style={styles.langkahMemasakChild} />
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image4.png")}
      />
      <Text style={styles.adirahmaArya}>{`Adirahma Arya `}</Text>
      <ScrollView
        style={[styles.langkahMemasakInner, styles.imageParentLayout]}
      >
        <View style={[styles.imageParent, styles.imageParentLayout]}>
          <Image
            style={styles.imageIcon1}
            contentFit="cover"
            source={require("../assets/image1.png")}
          />
          <Text style={styles.sotoBetawi}>Soto Betawi</Text>
          <Text
            style={[styles.sotoBetawiAdalahContainer, styles.dagingSapi500Typo]}
          >
            <Text style={styles.sotoBetawiAdalahContainer1}>
              <Text style={styles.bahanTypo}>{`Soto Betawi `}</Text>
              <Text style={styles.mntTypo}>
                adalah soto khas Jakarta dengan kuah santan kental dan gurih,
                diisi daging sapi dan rempah seperti lengkuas, jahe, dan serai.
                Disajikan dengan kentang goreng, emping, dan perasan jeruk nipis
                untuk rasa segar.
              </Text>
            </Text>
          </Text>
          <Text
            style={[styles.dagingSapi500, styles.mntTypo]}
          >{`Daging sapi (500 gram, bisa ditambah jeroan jika suka)
Santan (500 ml) dan susu cair (200 ml) atau ganti dengan santan tambahan
Serai (2 batang, memarkan)
Daun salam (2 lembar)
Daun jeruk (3 lembar, buang tulangnya)
Lengkuas (1 ruas, memarkan)
Jahe (1 ruas, memarkan)
Garam dan gula secukupnya
Minyak goreng untuk menumis

Bumbu halus:
Bawang merah (5 butir)
Bawang putih (3 siung)
Kemiri (2 butir, sangrai)
Merica (1 sdt)
Ketumbar (1 sdt)
Jintan (1/4 sdt)

Pelengkap:
Tomat, daun bawang, emping, acar, dan perasan jeruk limau`}</Text>
          <View style={styles.bahanBahanParent}>
            <Text style={[styles.bahanBahan, styles.bahanFlexBox]}>
              Bahan - bahan:
            </Text>
            <View style={[styles.mntParent, styles.orangLayout]}>
              <Text style={[styles.mnt, styles.bahanFlexBox]}>60 mnt</Text>
              <Image
                style={[styles.timeIcon, styles.arrowPosition]}
                contentFit="cover"
                source={require("../assets/time1.png")}
              />
              <Text style={[styles.orang, styles.orangLayout]}>2 orang</Text>
              <Image
                style={[styles.personIcon, styles.orangLayout]}
                contentFit="cover"
                source={require("../assets/person.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Klikbutton
        button="memasak"
        onKlikbuttonPress={() => navigation.navigate("LANGKAH")}
        klikbuttonBottom={56}
        klikbuttonLeft="50%"
        klikbuttonTop="unset"
        klikbuttonWidth={247}
        klikbuttonHeight={45}
        klikbuttonMarginTop="unset"
        registrasi="Langkah memasak"
      />
      <Pressable
        style={[styles.arrow, styles.arrowPosition]}
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
    overflow: "hidden",
    width: "100%",
  },
  imageParentLayout: {
    width: 385,
    position: "absolute",
  },
  dagingSapi500Typo: {
    fontSize: FontSize.size_smi,
    left: 23,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  mntTypo: {
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
  },
  bahanFlexBox: {
    justifyContent: "center",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
  },
  orangLayout: {
    height: 16,
    position: "absolute",
  },
  arrowPosition: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  langkahMemasakChild: {
    backgroundColor: Color.colorFirebrick_100,
    width: 430,
    height: 61,
    left: 0,
    top: 0,
    position: "absolute",
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
    width: 75,
    height: 17,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  imageIcon1: {
    top: 63,
    left: 55,
    borderRadius: Border.br_3xs,
    width: 295,
    height: 149,
    position: "absolute",
  },
  sotoBetawi: {
    left: 128,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  bahanTypo: {
    fontFamily: FontFamily.martelSansBlack,
    fontWeight: "900",
  },
  sotoBetawiAdalahContainer1: {
    width: "100%",
  },
  sotoBetawiAdalahContainer: {
    top: 249,
    width: 360,
    height: 129,
  },
  dagingSapi500: {
    top: 454,
    width: 362,
    fontSize: FontSize.size_smi,
    left: 23,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  bahanBahan: {
    width: 151,
    height: 30,
    fontFamily: FontFamily.martelSansBlack,
    fontWeight: "900",
    left: 0,
    top: 0,
    position: "absolute",
  },
  mnt: {
    top: 2,
    left: 25,
    width: 51,
    height: 14,
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  timeIcon: {
    width: 23,
    height: 15,
  },
  orang: {
    left: 94,
    width: 61,
    justifyContent: "center",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.martelSansSemiBold,
    fontWeight: "600",
    top: 0,
  },
  personIcon: {
    left: 80,
    width: 14,
    top: 0,
  },
  mntParent: {
    top: 29,
    left: 27,
    width: 155,
  },
  bahanBahanParent: {
    top: 399,
    width: 182,
    height: 45,
    left: 0,
    position: "absolute",
  },
  imageParent: {
    height: 1006,
    left: 0,
    top: 0,
  },
  langkahMemasakInner: {
    top: 72,
    left: 12,
    maxWidth: 385,
    flex: 1,
  },
  icon: {
    height: "100%",
  },
  arrow: {
    width: 48,
    height: 60,
  },
  langkahMemasak: {
    backgroundColor: Color.colorWhite,
    height: 928,
    flex: 1,
  },
});

export default LANGKAHMEMASAK;
