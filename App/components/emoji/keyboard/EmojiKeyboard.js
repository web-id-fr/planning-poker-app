import React from "react";
import EmojiSelector from "react-native-emoji-selector";

import { EmojiKeyboardStyle } from "./EmojiKeyboardStyle";

export const EmojiKeyboard = ({handleEmojiChange, showEmojiKeyboard}) => {
  let style = EmojiKeyboardStyle;
  return (
    <EmojiSelector
      onEmojiSelected={(emoji) => handleEmojiChange(emoji)}
      style={showEmojiKeyboard ? style.EmojiSelector : style["EmojiSelector--hidden"]}
    />
  );
};
