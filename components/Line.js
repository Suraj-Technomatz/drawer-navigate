import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HorizontalLineWithText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
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
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10, // Adjust spacing between line and text
  },
  text: {
    fontSize: 18,
    color: "yellow",
    fontWeight: "bold",
  },
});

export default HorizontalLineWithText;
