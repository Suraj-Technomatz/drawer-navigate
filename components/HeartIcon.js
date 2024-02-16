import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function HeartIcon({ label, isLiked, handlePress, navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backBtn}>
        <View>
          <FontAwesome name="arrow-left" size={15} />
        </View>
        <View>
          <Text style={styles.headText}>{label}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        {isLiked ? (
          <FontAwesome name="heart" size={30} color="red" />
        ) : (
          <FontAwesome name="heart-o" size={30} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default HeartIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
  },
  backBtn: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 20,
  },
  headText: { fontSize: 18, fontWeight: "bold" },
});
