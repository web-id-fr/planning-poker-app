import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import { EstimationCard } from "../components/estimation/EstimationCard";

export const Number = () => {
  // Possible values for appStep : estimation-selection, emoji-selection, results
  const [appStep, setAppStep] = useState("estimation-selection");
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
      <View style={style.container}>
        {items.map((item, index) => (
          appStep === "estimation-selection" || index === selectedCard ?
            <EstimationCard index={index} cardTitle={item} handleCardClick={handleCardClick}/> :
            null
        ))}
      </View>
  );
};

var style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  }
});
