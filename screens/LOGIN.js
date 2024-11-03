import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent3 from "../components/GroupComponent3";
import Klikbutton from "../components/Klikbutton";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LOGIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text style={styles.cookingMima}>{`Cooking Mima `}</Text>
      <Image
        style={styles.chefWithFoodIsGoingToCoo}
        contentFit="cover"
        source={require("../assets/chef-with-food-is-going-to-cook.png")}
      />
      <GroupComponent3 />
      <Klikbutton
        button="login"
        onKlikbuttonPress={() => navigation.navigate("MAINPAGE")}
        klikbuttonBottom={144}
        klikbuttonLeft="50%"
        klikbuttonTop="unset"
        klikbuttonWidth={187}
        klikbuttonHeight={59}
        klikbuttonMarginTop="unset"
        registrasi="Login"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cookingMima: {
    marginLeft: -126.2,
    top: 293,
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
    top: 142,
    left: 87,
    width: 255,
    height: 188,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LOGIN;
