import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

import { EmojiButtonStyle } from "./EmojiButtonStyle";

export const EmojiButton = () => {
  let style = EmojiButtonStyle;
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("yeah");
      }}
      style={style.button_container}
    >
      <Text style={style.button_title_style}>😇</Text>
    </TouchableOpacity>
  );
};
