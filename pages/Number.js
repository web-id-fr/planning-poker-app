import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Number = () => {
  const [selectedText, setSelectedText] = useState();

  const handleClick = (number) => {
    setSelectedText(number)
  };

  return (
    <>
      <View style={style.container}>
        {numbers.map((number, index) => (
          <TouchableOpacity
            onPress={() => {
              handleClick(number);
            }}
            key={index}
            style={style.cardStyle}
          >
            <Text style={style.textStyle}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={style.textSelected}>{selectedText}</Text>
    </>
  );
};

var style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cardStyle: {
    flexBasis: "40%",
    marginTop: 10,
    marginRight: 10,
    height: 110,
    justifyContent: "center",
    backgroundColor: "lightpink"
  },
  textStyle: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  textSelected: {
   marginTop: 50
  },
});
