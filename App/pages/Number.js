import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";

import { EstimationCard } from "../components/estimation/EstimationCard";

export const Number = ({appStep, setAppStep}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (selectedCardIndex) => {
    if (appStep === "estimation-selection") {
      setAppStep("emoji-selection")
      setSelectedCard(selectedCardIndex)
    } else {
      setAppStep("estimation-selection")
      setSelectedCard(null)
    }
  };

  const items = [0, "1/2", 1, 2, 3, 5, 8, 13, 20, 40, 100, "?"];

  return (
    <SafeAreaView>
      <View style={[selectedCard !== null ? style["container--selected"] : style.container]}>
        {items.map((item, index) => (
          appStep === "estimation-selection" || index === selectedCard ?
            <EstimationCard key={item} index={index} cardTitle={item} handleCardClick={handleCardClick} appStep={appStep} /> :
            null
        ))}
      </View>
    </SafeAreaView>
      
  );
};

var style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: 30,
  },
  "container--selected": {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  }
});
