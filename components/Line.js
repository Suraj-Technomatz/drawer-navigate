import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HorizontalLineWithText = ({ text, isFullLine = false }) => {
  return (
    <View style={[!isFullLine && styles.container]}>
      {!isFullLine && <Text style={styles.text}>{text}</Text>}
      <View
        style={[styles.line, isFullLine && { borderBottomColor: "grey" }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  line: {
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    flex: 1,
    marginRight: 10, // Adjust spacing between line and text
  },
  text: {
    fontSize: 20,
    color: "yellow",
    fontWeight: "bold",
    minWidth: 60,
  },
});

export default HorizontalLineWithText;
