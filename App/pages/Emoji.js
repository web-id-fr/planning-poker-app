import React,  { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import EmojiSelector from "react-native-emoji-selector";

export const Emoji = ({appStep, setAppStep}) => {
  const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState('😇')
  const handleEmojiKeyboard = () => setShowEmojiKeyboard(!showEmojiKeyboard);
  const handleEmojiChange = emoji => {handleEmojiKeyboard(); setSelectedEmoji(emoji)};

  return (
    <View>
      <View style={styles.mainContainer}>
        <Button
          onPress={handleEmojiKeyboard}
          title={selectedEmoji}
          accessibilityLabel="Show emoji keyboard "
        />
      </View>
      {showEmojiKeyboard && (
        <View style={styles.emojiContainer}>
          <EmojiSelector
            columns="9"
            onEmojiSelected={(emoji) => handleEmojiChange(emoji)}
          />
        </View>
      )}
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
