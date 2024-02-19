import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const FavouriteItem = ({ title, navigation, imageUrl, id }) => {
  const onHandlePress = () => {
    navigation.navigate("आरती", {
      id,
    });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onHandlePress}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Image
          style={styles.img}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <FontAwesome name="arrow-right" size={15} />
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
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
