import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { godsName } from "../../utils";
import BackgroundImage from "../../components/ImageBackground";

const Item = ({ godN, onHandlePress }) => (
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
          <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 10 }}>
            {godN.name}
          </Text>
        </View>
      </View>
      <View>
        <Icon name="angle-right" size={30} color="#900" />
      </View>
    </TouchableOpacity>
  </View>
);

export default function HomeScreen({ navigation }) {
  const onHandlePress = (id) => {
    navigation.navigate("आरती", {
      id,
    });
  };

  const image = require("../../assets/back6.jpg");

  return (
    <View style={styles.container}>
      <BackgroundImage source={image}>
        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: 30 }}>
            <FlatList
              data={godsName}
              renderItem={({ item }) => (
                <Item godN={item} onHandlePress={onHandlePress} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  containerForList: {
    flex: 1,
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
  textColor: {
    color: "yellow",
  },
  textBold: {
    fontWeight: "bold",
  },
});