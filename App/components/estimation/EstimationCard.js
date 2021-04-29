import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { CardStyle } from "./EstimationCardStyle";

export const EstimationCard = (props) => {
  const { index, cardTitle, handleCardClick } = props
  const style = StyleSheet.create(CardStyle);

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (index) => {
    handleCardClick(index);
    isSelected ? setIsSelected(false) : setIsSelected(true)
  };

  return (
      <TouchableOpacity
        onPress={() => {
          handleClick(index);
        }}
        key={index}
        style={[
          style.cardStyle,
          isSelected ? style["cardStyle--selected"] : style["cardStyle--default"]
        ]}
      >
        <Text style={[isSelected ? style["itemStyle--selected"] : style.itemStyle ]}>{cardTitle}</Text>
      </TouchableOpacity>
  );
};
