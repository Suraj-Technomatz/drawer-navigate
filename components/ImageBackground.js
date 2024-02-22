import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BackgroundImage = ({ children, source }) => {
  return (
    <ImageBackground source={source} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
  },
});

export default BackgroundImage;
