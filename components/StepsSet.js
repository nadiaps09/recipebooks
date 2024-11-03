import React, { memo } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "./FrameComponent2";
import GroupComponent5 from "./GroupComponent5";
import GroupComponent4 from "./GroupComponent4";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StepsSet = memo(() => {
  return (
    <View style={styles.steps}>
      <FrameComponent2
        langkah="step 1"
        potongPotongDagingDanKikil="Potong potong daging dan kikil yg sudah di rebus"
        image={require("../assets/image2.png")}
        image1={require("../assets/image3.png")}
        frame34={require("../assets/frame-37.png")}
        frame37={require("../assets/arrow1.png")}
        image2={require("../assets/image2.png")}
        image3={require("../assets/image3.png")}
      />
      <ScrollView style={[styles.langkahstep2, styles.langkahstepLayout]}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.kupasKentangDan, styles.kupasKentangDanTypo]}>
            Kupas kentang dan goreng
          </Text>
          <Image
            style={[styles.imageIcon, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image21.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image31.png")}
          />
        </View>
        <Image
          style={[styles.loadIcon, styles.loadIconPosition]}
          contentFit="cover"
          source={require("../assets/load.png")}
        />
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
        <Image
          style={[styles.arrowIcon1, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow1.png")}
        />
      </ScrollView>
      <ScrollView style={[styles.langkahstep3, styles.langkahstepLayout]}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.kupasKentangDan, styles.kupasKentangDanTypo]}>
            Iris daun bawang, seledri dan tomat
          </Text>
          <Image
            style={[styles.imageIcon, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image6.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image7.png")}
          />
        </View>
        <Image
          style={[styles.loadIcon1, styles.loadIconPosition]}
          contentFit="cover"
          source={require("../assets/load1.png")}
        />
        <Image
          style={[styles.arrowIcon2, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow3.png")}
        />
        <Image
          style={[styles.arrowIcon3, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow4.png")}
        />
      </ScrollView>
      <ScrollView style={[styles.langkahsetp4, styles.langkahstepLayout]}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChildShadowBox} />
          <Text
            style={[styles.blenderSemuaBumbutumis, styles.kupasKentangDanTypo]}
          >
            Blender semua bumbu,tumis sampai matang beri daun salam dan serai
          </Text>
          <Image
            style={[styles.imageIcon, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image8.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image9.png")}
          />
        </View>
        <Image
          style={[styles.loadIcon, styles.loadIconPosition]}
          contentFit="cover"
          source={require("../assets/load2.png")}
        />
        <Image
          style={[styles.arrowIcon4, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
        <Image
          style={[styles.arrowIcon3, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow4.png")}
        />
      </ScrollView>
      <ScrollView style={[styles.langkahstep5, styles.langkahstepLayout]}>
        <GroupComponent5 />
        <Image
          style={[styles.loadIcon, styles.loadIconPosition]}
          contentFit="cover"
          source={require("../assets/load3.png")}
        />
        <Image
          style={[styles.arrowIcon3, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow4.png")}
        />
        <Image
          style={[styles.arrowIcon4, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
      </ScrollView>
      <ScrollView style={[styles.langkahstep7, styles.langkahstepLayout]}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChildShadowBox} />
          <Text
            style={[styles.blenderSemuaBumbutumis, styles.kupasKentangDanTypo]}
          >
            Masak sampai mendidih dan Tanak,beri santan
          </Text>
          <Image
            style={[styles.imageIcon6, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image12.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image13.png")}
          />
        </View>
        <Image
          style={[styles.loadIcon, styles.loadIconPosition]}
          contentFit="cover"
          source={require("../assets/load.png")}
        />
        <Image
          style={[styles.arrowIcon3, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow4.png")}
        />
        <Image
          style={[styles.arrowIcon4, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
      </ScrollView>
      <ScrollView style={[styles.langkahstep8, styles.langkahstepLayout]}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChildShadowBox} />
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame-35.png")}
          />
          <Text
            style={[styles.blenderSemuaBumbutumis, styles.kupasKentangDanTypo]}
          >
            Masak dan aduk trus 10 mnt,tuang susu cair...masak sebentar
          </Text>
          <Image
            style={[styles.imageIcon, styles.imageIconPosition]}
            contentFit="cover"
            source={require("../assets/image14.png")}
          />
        </View>
        <Image
          style={[styles.loadIcon, styles.loadIconPosition]}
          contentFit="cover"
          source={require("../assets/load1.png")}
        />
        <Image
          style={[styles.arrowIcon4, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
      </ScrollView>
      <FrameComponent2
        langkah="step 9"
        frameScrollViewPosition="absolute"
        frameScrollViewTop={20}
        frameScrollViewLeft={3292}
        potongPotongDagingDanKikil="Sajikan soto beri irisan tomat,daun bawang seledri dan bawang goreng"
        image={require("../assets/image15.png")}
        image1={require("../assets/load4.png")}
        frame34={require("../assets/frame-35.png")}
        frame37={require("../assets/arrow2.png")}
        image2={require("../assets/image15.png")}
        image3={require("../assets/load4.png")}
      />
      <ScrollView style={[styles.langkahstep6, styles.langkahstepLayout]}>
        <GroupComponent4 />
        <Image
          style={[styles.loadIcon, styles.loadIconPosition]}
          contentFit="cover"
          source={require("../assets/frame-37.png")}
        />
        <Image
          style={[styles.arrowIcon4, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow2.png")}
        />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  langkahstepLayout: {
    maxHeight: 203,
    height: 203,
    top: 20,
    position: "absolute",
    width: "100%",
  },
  kupasKentangDanTypo: {
    width: 326,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.martelSansRegular,
    fontSize: FontSize.size_mini,
    left: 17,
    position: "absolute",
  },
  imageIconPosition: {
    height: 80,
    top: 76,
    position: "absolute",
  },
  loadIconPosition: {
    height: 20,
    width: 164,
    left: "50%",
    marginLeft: -85,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 60,
    width: 27,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildShadowBox: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 386,
    left: 0,
    top: 0,
    height: 203,
    position: "absolute",
  },
  kupasKentangDan: {
    top: 26,
  },
  imageIcon: {
    left: 47,
    width: 134,
    height: 80,
  },
  imageIcon1: {
    left: 197,
    width: 142,
  },
  rectangleParent: {
    width: 386,
    left: 0,
    top: 0,
    height: 203,
    position: "absolute",
  },
  loadIcon: {
    bottom: 10,
  },
  arrowIcon: {
    top: 81,
    left: 3,
  },
  arrowIcon1: {
    top: 80,
    left: 348,
  },
  langkahstep2: {
    left: 429,
  },
  loadIcon1: {
    bottom: 8,
  },
  arrowIcon2: {
    top: 77,
    left: 7,
  },
  arrowIcon3: {
    left: 352,
    top: 76,
    height: 60,
    width: 27,
  },
  langkahstep3: {
    left: 838,
  },
  blenderSemuaBumbutumis: {
    top: 12,
  },
  arrowIcon4: {
    left: 8,
    top: 76,
    height: 60,
    width: 27,
  },
  langkahsetp4: {
    left: 1247,
  },
  langkahstep5: {
    left: 1656,
  },
  imageIcon6: {
    left: 46,
    width: 134,
    height: 80,
  },
  langkahstep7: {
    left: 2474,
  },
  frameIcon: {
    top: 79,
    right: 12,
    bottom: 70,
    maxHeight: "100%",
    width: 31,
    position: "absolute",
    overflow: "hidden",
  },
  langkahstep8: {
    left: 2883,
  },
  langkahstep6: {
    left: 2065,
  },
  steps: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    height: 243,
    overflow: "hidden",
    width: "100%",
  },
});

export default StepsSet;
