import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

import {
  EmojiButtonStyleDefault,
  EmojiButtonStyleResultsPage,
} from "./EmojiButtonStyle";

export const EmojiButton = ({ selectedEmoji, action, appStep }) => {
  let style =
    appStep === "results"
      ? EmojiButtonStyleResultsPage
      : EmojiButtonStyleDefault;

  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}
      style={style.button_container}
    >
      <Text style={style.button_title_style}>{selectedEmoji}</Text>
    </TouchableOpacity>
  );
};
