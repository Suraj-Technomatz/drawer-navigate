// DrawerContent.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const DrawerContent = ({ navigation }) => {
  const image = require("../assets/aarti-logo.png");
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
    navigation.closeDrawer(); // Close the drawer after navigating
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={image} />
        <View>
          <Text style={styles.logoText}>(आरती संग्रह), सम्पूर्ण....</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleNavigate("Home")}
        style={styles.tab}
      >
        <Text style={styles.tabText}>आरती संग्रह</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  logoText: {
    fontSize: 18,
    color: "yellow",
  },
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "orangered",
    // backgroundColor: "indianred",
    color: "#fff",
  },
  tab: {
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  tabText: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
