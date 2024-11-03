import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent2 from "../components/GroupComponent2";
import Klikbutton from "../components/Klikbutton";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const REGISTRASI = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registrasi}>
      <Text style={styles.cookingMima}>{`Cooking Mima `}</Text>
      <Image
        style={styles.chefWithFoodIsGoingToCoo}
        contentFit="cover"
        source={require("../assets/chef-with-food-is-going-to-cook.png")}
      />
      <GroupComponent2 />
      <Klikbutton
        button="register"
        onKlikbuttonPress={() => navigation.navigate("LOGIN")}
        registrasi="Registrasi"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cookingMima: {
    marginLeft: -127.2,
    top: 241,
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 250,
    height: 37,
    position: "absolute",
  },
  chefWithFoodIsGoingToCoo: {
    top: 90,
    left: 86,
    width: 255,
    height: 188,
    position: "absolute",
  },
  registrasi: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default REGISTRASI;
