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
