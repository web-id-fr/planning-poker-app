import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { EmojiButton } from "../components/emoji/button/EmojiButton";
import { EmojiKeyboard } from "../components/emoji/keyboard/EmojiKeyboard";

export const Emoji = ({ appStep, setAppStep }) => {
  const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("😇");
  
  const handleEmojiKeyboard = () => setShowEmojiKeyboard(!showEmojiKeyboard);
  
  const handleEmojiChange = (emoji) => {
    handleEmojiKeyboard();
    setSelectedEmoji(emoji);
  };

  const handleResultsDisplay = () => {
    if (appStep === "results") {
      setAppStep("estimation-selection")
    } else {
      setAppStep("results")
    }
  }

  return (
    <View style={{flex:1}}>
      {appStep == "results" ? (<EmojiButton
        selectedEmoji={selectedEmoji}
        appStep={appStep}
        action={() => { setAppStep("emoji-selection") }}
      />) : (<EmojiButton
        selectedEmoji={selectedEmoji}
        action={handleEmojiKeyboard}
      />)}
      <EmojiKeyboard
        handleEmojiChange={handleEmojiChange}
        showEmojiKeyboard={showEmojiKeyboard}
      />
      {!showEmojiKeyboard ? (
        <View style={styles.bottom} >
          <TouchableOpacity
            onPress={() => { handleResultsDisplay() }}
          >
            <Text style={styles.show_result_button}>
              {appStep === "results" ? "Back" : "Show my estimation"}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  show_result_button: {
    textAlign: "center",
    fontWeight: "700",
  },
});
