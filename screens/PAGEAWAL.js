import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Klikbutton from "../components/Klikbutton";
import { FontFamily, Color } from "../GlobalStyles";

const PAGEAWAL = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageAwal}>
      <Text style={styles.cookingMima}>{`Cooking Mima `}</Text>
      <Image
        style={styles.chefWithFoodIsGoingToCoo}
        contentFit="cover"
        source={require("../assets/chef-with-food-is-going-to-cook1.png")}
      />
      <Klikbutton
        button="login"
        onKlikbuttonPress={() => navigation.navigate("LOGIN")}
        klikbuttonBottom="unset"
        klikbuttonLeft="50%"
        klikbuttonTop="50%"
        klikbuttonWidth={187}
        klikbuttonHeight={59}
        klikbuttonMarginTop={52}
        registrasi="Login"
      />
      <Klikbutton
        button="register"
        onKlikbuttonPress={() => navigation.navigate("REGISTRASI")}
        klikbuttonBottom="unset"
        klikbuttonLeft="50%"
        klikbuttonTop="50%"
        klikbuttonWidth={187}
        klikbuttonHeight={59}
        klikbuttonMarginTop={138}
        registrasi="Registrasi"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cookingMima: {
    marginLeft: -143,
    top: 365,
    left: "50%",
    fontSize: 45,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 284,
    height: 65,
    position: "absolute",
  },
  chefWithFoodIsGoingToCoo: {
    top: 100,
    left: 70,
    width: 290,
    height: 330,
    position: "absolute",
  },
  pageAwal: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default PAGEAWAL;
