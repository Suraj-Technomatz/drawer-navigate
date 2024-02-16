// DrawerContent.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DrawerContent = ({ navigation }) => {
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
    navigation.closeDrawer(); // Close the drawer after navigating
  };
  return (
    <View style={styles.container}>
      <Text>Drawer Content</Text>
      <Button title="आरती संग्रह" onPress={() => handleNavigate("Home")} />
      {/* <Button title="आरती" onPress={() => handleNavigate("Details")} /> */}
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});
