import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const FavouriteItem = ({ title, navigation, imageUrl, id }) => {
  const onHandlePress = () => {
    navigation.navigate("आरती", {
      id,
    });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onHandlePress}>
      <Image
        style={styles.img}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FavouriteItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  img: {
    width: 40,
    height: 40,
  },
});
