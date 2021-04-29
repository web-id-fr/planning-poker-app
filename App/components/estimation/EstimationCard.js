import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CardStyle } from "./EstimationCardStyle";
import { theme } from "../../infrastructure/theme";
import { LinearGradient } from "expo-linear-gradient";

export const EstimationCard = ({
  index,
  cardTitle,
  handleCardClick,
  appStep,
}) => {
  const style = StyleSheet.create(CardStyle);

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (index) => {
    handleCardClick(index);
    isSelected ? setIsSelected(false) : setIsSelected(true);
  };

  const getStyle = () => {
    switch (appStep) {
      case "estimation-selection":
        return style["cardStyle--default"];
        break;
      case "emoji-selection":
        return style["cardStyle--selected"];
        break;
      case "results":
        return style["cardStyle--large"];
        break;
      default:
        return style["cardStyle--default"];
        break;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleClick(index);
      }}
      key={index}
      style={[style.cardStyle, getStyle()]}
    >
      <LinearGradient
        style={{flex:1}}
        colors={[theme.colors.card.primary, theme.colors.card.secondary]}
      >
        <Text
          style={[isSelected ? style["itemStyle--selected"] : style.itemStyle]}
        >
          {cardTitle}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
