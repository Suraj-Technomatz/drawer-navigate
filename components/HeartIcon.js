import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function HeartIcon({ label, isLiked, handlePress, navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        marginBottom: 10,
        // padding: 0,
      }}
    >
      <TouchableOpacity
        onPress={goBack}
        style={{
          flexDirection: "row",
          gap: 8,
          justifyContent: "center",
          alignContent: "center",
          paddingLeft: 20,
        }}
      >
        <View>
          <FontAwesome name="arrow-left" size={15} />
        </View>
        <View>
          <Text>{label}</Text>
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
