import React,  { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

// import EmojiSelector from "react-native-emoji-selector";
import { EmojiButton } from "../components/emoji/EmojiButton";

export const Emoji = ({appStep, setAppStep}) => {

  // const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState('😇')
  // const handleEmojiKeyboard = () => setShowEmojiKeyboard(!showEmojiKeyboard);
  // const handleEmojiChange = emoji => {handleEmojiKeyboard(); setSelectedEmoji(emoji)};

  return (
    <View>
      <EmojiButton />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emojiContainer: {
    height: 400,
  },
});
