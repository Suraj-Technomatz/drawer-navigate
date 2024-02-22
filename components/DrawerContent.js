// DrawerContent.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import HorizontalLine from "./Line";
import { contentItems, extraContentItems } from "../utils";
import HorizontalLineWithText from "./Line";

const DrawerContent = ({ navigation }) => {
  const image = require("../assets/aarti-logo.png");

  const handleNavigate = (screen) => {
    if (screen) {
      navigation.navigate(screen);
      navigation.closeDrawer(); // Close the drawer after navigating
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={image} />
        <View>
          <Text style={styles.logoText}>(आरती संग्रह), सम्पूर्ण....</Text>
        </View>
      </View>
      {contentItems.map((item) => (
        <TouchableOpacity
          onPress={() => handleNavigate(item.redirectTo)}
          style={styles.tab}
        >
          <Text style={styles.tabText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
      <HorizontalLineWithText isFullLine />
      {/* Extra Items */}
      <View style={[styles.extraContainer]}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Extra</Text>
        </View>
        {extraContentItems.map((item) => (
          <TouchableOpacity
            onPress={() => handleNavigate(item.redirectTo)}
            style={styles.tab}
          >
            <Text style={styles.tabText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    color: "#fff",
    paddingLeft: 12,
  },
  tab: {
    paddingVertical: 2,
    marginBottom: 2,
  },
  tabText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  extraContainer: {
    marginVertical: 20,
  },
});
