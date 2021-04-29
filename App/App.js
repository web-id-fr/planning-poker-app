import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Number } from "./pages/Number";
import { Emoji } from "./pages/Emoji";
import { ThemeProvider } from "react-native-elements";
import { theme } from "./infrastructure/theme/index";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {
  useFonts as useMonoton,
  Monoton_400Regular,
} from "@expo-google-fonts/monoton";

export default function App() {
  // Possible values for appStep : estimation-selection, emoji-selection, results
  const [appStep, setAppStep] = useState("estimation-selection");

  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  const [monotonLoaded] = useMonoton({
    Monoton_400Regular,
  });

  if (!oswaldLoaded || !monotonLoaded) {
    return null;
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollView>
          <View style={styles.container}>
            <Number appStep={appStep} setAppStep={setAppStep} />
            {appStep !== "estimation-selection" ? (
              <Emoji appStep={appStep} setAppStep={setAppStep} />
            ) : null}
          </View>
        </ScrollView>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
