import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { godsName } from "../../utils";
import BackgroundImage from "../../components/ImageBackground";
import Line from "../../components/Line";

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

  const image = require("../../assets/gradiant.jpg");

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage source={image}>
        <View>
          <FlatList
            data={godsName}
            renderItem={({ item }) => (
              <Item godN={item} onHandlePress={onHandlePress} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <View>
            <Text>व्रत कथा 1</Text>
          </View>
          <View>
            <Line />
          </View>
        </View>
      </BackgroundImage>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
