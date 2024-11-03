const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import REGISTRASI from "./screens/REGISTRASI";
import LANGKAH from "./screens/LANGKAH";
import PAGEAWAL from "./screens/PAGEAWAL";
import HISTORY1 from "./screens/HISTORY1";
import LANGKAHMEMASAK from "./screens/LANGKAHMEMASAK";
import MAINPAGE from "./screens/MAINPAGE";
import LOGIN from "./screens/LOGIN";
import StepsSet from "./components/StepsSet";
import KlikbuttonSet from "./components/KlikbuttonSet";
import LoadSet from "./components/LoadSet";
import ArrowSet from "./components/ArrowSet";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "MartelSans-Regular": require("./assets/fonts/MartelSans-Regular.ttf"),
    "MartelSans-SemiBold": require("./assets/fonts/MartelSans-SemiBold.ttf"),
    "MartelSans-Bold": require("./assets/fonts/MartelSans-Bold.ttf"),
    "MartelSans-Black": require("./assets/fonts/MartelSans-Black.ttf"),
    "KaushanScript-Regular": require("./assets/fonts/KaushanScript-Regular.ttf"),
    "Aleo-Regular": require("./assets/fonts/Aleo-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="REGISTRASI"
              component={REGISTRASI}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LANGKAH"
              component={LANGKAH}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PAGEAWAL"
              component={PAGEAWAL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HISTORY1"
              component={HISTORY1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LANGKAHMEMASAK"
              component={LANGKAHMEMASAK}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MAINPAGE"
              component={MAINPAGE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LOGIN"
              component={LOGIN}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
