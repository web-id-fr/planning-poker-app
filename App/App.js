import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {Number} from "./pages/Number";
import {Emoji} from "./pages/Emoji";


export default function App() {
  // Possible values for appStep : estimation-selection, emoji-selection, results
  const [appStep, setAppStep] = useState("estimation-selection");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Number appStep={appStep} setAppStep={setAppStep} />
        {appStep !== "estimation-selection" ? 
          <Emoji appStep={appStep} setAppStep={setAppStep} /> : null
        }
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
