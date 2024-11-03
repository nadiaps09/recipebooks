import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Klikbutton from "./Klikbutton";
import { Border, Color } from "../GlobalStyles";

const KlikbuttonSet = memo(() => {
  return (
    <View style={styles.klikbutton}>
      <Klikbutton
        button="register"
        klikbuttonBottom="unset"
        klikbuttonLeft={20}
        klikbuttonTop={20}
        klikbuttonWidth={187}
        klikbuttonHeight={59}
        klikbuttonMarginTop="unset"
        registrasi="Registrasi"
      />
      <Klikbutton
        button="login"
        klikbuttonBottom="unset"
        klikbuttonLeft={20}
        klikbuttonTop={92}
        klikbuttonWidth={187}
        klikbuttonHeight={59}
        klikbuttonMarginTop="unset"
        registrasi="Login"
      />
      <Klikbutton
        button="memasak"
        klikbuttonBottom="unset"
        klikbuttonLeft={20}
        klikbuttonTop={164}
        klikbuttonWidth={247}
        klikbuttonHeight={45}
        klikbuttonMarginTop="unset"
        registrasi="Langkah memasak"
      />
      <Klikbutton
        button="selesai"
        klikbuttonBottom="unset"
        klikbuttonLeft={20}
        klikbuttonTop={222}
        klikbuttonWidth={247}
        klikbuttonHeight={45}
        klikbuttonMarginTop="unset"
        registrasi="Selesai masak"
      />
      <Klikbutton
        button="lain"
        klikbuttonBottom="unset"
        klikbuttonLeft={20}
        klikbuttonTop={280}
        klikbuttonWidth={247}
        klikbuttonHeight={45}
        klikbuttonMarginTop="unset"
        registrasi="Lihat resep lain"
      />
      <Klikbutton
        button="klikmsk"
        klikbuttonBottom="unset"
        klikbuttonLeft={20}
        klikbuttonTop={338}
        klikbuttonWidth={83}
        klikbuttonHeight={22}
        klikbuttonMarginTop="unset"
        registrasi="mulai masak"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  klikbutton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: "100%",
    height: 385,
    overflow: "hidden",
  },
});

export default KlikbuttonSet;
