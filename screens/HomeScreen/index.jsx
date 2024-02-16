import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { godsName } from "../../utils";
import BackgroundImage from "../../components/ImageBackground";

export default function HomeScreen({ navigation }) {
  const onHandlePress = (id) => {
    navigation.navigate("आरती", {
      id,
    });
  };

  const image = require("../../assets/gradiant.jpg");

  return (
    <BackgroundImage source={image}>
      <View style={{ flex: 1 }}>
        {godsName.map((godN) => (
          <View key={godN?.id}>
            <TouchableOpacity
              onPress={() => onHandlePress(godN?.id)}
              style={styles.containerForList}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Image
                    style={styles.img}
                    source={{
                      uri: godN.imageUrl,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, marginLeft: 10 }}
                  >
                    {godN.name}
                  </Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={30} color="#900" />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  containerForList: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  img: {
    width: 50,
    height: 50,
  },
});
