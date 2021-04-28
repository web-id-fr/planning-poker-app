import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export const Number = () => {
  const [selectedText, setSelectedText] = useState();
  const [isSelected, setisSelected] = useState(false);

  const handleClick = (number) => {
    setSelectedText(number);
    setisSelected(true);
  };

  const reset = () => {
    setisSelected(false);
  };

  const items = [0, "1/2", 1, 2, 3, 5, 8, 13, 20, 40, 100, "?"];

  return (
    <>
      {isSelected && (
        <View>
          <Button onPress={reset} title="Reset" />
        </View>
      )}

      <View style={[style.container, isSelected ? { display: "none" } : ""]}>
        {items.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              handleClick(item);
            }}
            key={index}
            style={style.cardStyle}
          >
            <Text style={style.itemStyle}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {isSelected && (
        <View style={style.selectedCard}>
          <Text style={style.selectedCardText}>{selectedText}</Text>
        </View>
      )}
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
    height: 200,
    justifyContent: "center",
    backgroundColor: "lightpink",
  },
  itemStyle: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  selectedCard: {
    height: 350,
    width: 350,
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  selectedCardText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 150,
    fontWeight: "bold",
  },
});
