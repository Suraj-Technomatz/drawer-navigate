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

import { godsName, chaleesa } from "../../utils";
import BackgroundImage from "../../components/ImageBackground";
import { useSelector } from "react-redux";

const Item = ({ godN, onHandlePress }) => (
  <View key={godN?._id}>
    <TouchableOpacity
      onPress={() => onHandlePress(godN?._id)}
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

export default function HomeScreen({ navigation, route }) {
  const { pageName } = route.params;
  const aarty = useSelector((state) => state.default.aarty);
  const onHandlePress = (id) => {
    navigation.navigate("आरती", {
      id,
      pageName,
    });
  };

  const image = require("../../assets/back6.jpg");

  return (
    <View style={styles.container}>
      <BackgroundImage source={image}>
        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: 30 }}>
            {pageName === "आरती" && (
              <FlatList
                data={aarty}
                renderItem={({ item }) => (
                  <Item godN={item} onHandlePress={onHandlePress} />
                )}
                keyExtractor={(item) => item._id}
              />
            )}
            {pageName === "चालीसा" && (
              <View>
                <FlatList
                  data={chaleesa}
                  renderItem={({ item }) => (
                    <Item godN={item} onHandlePress={onHandlePress} />
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            )}
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
