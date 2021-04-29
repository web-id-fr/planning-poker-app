import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CardStyle } from "./EstimationCardStyle";
import { theme } from "../../infrastructure/theme";
import { LinearGradient } from "expo-linear-gradient";

export const EstimationCard = (props) => {
  const { index, cardTitle, handleCardClick } = props;
  const style = StyleSheet.create(CardStyle);

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (index) => {
    handleCardClick(index);
    isSelected ? setIsSelected(false) : setIsSelected(true);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleClick(index);
      }}
      key={index}
      style={[
        style.cardStyle,
        isSelected ? style["cardStyle--selected"] : style["cardStyle--default"],
      ]}
    >
      <LinearGradient
        style={[
          style.linearGradient,
          isSelected
            ? style["linearGradientSelected"]
            : style["linearGradient--default"],
        ]}
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
