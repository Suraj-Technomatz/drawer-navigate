import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import Icon from "react-native-vector-icons/FontAwesome";

import { godsName } from "../../utils";
import BackgroundImage from "../../components/ImageBackground";
import Line from "../../components/Line";

export default function HomeScreen({ navigation }) {
  const image6 = require("../../assets/back6.jpg");

  function onHanglePress() {
    navigation.navigate("सूची", {
      id: 1,
    });
  }
  return (
    <View style={styles.container}>
      <BackgroundImage source={image6}>
        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 20,
              }}
            >
              <Text style={[styles.textColor, { fontSize: 28 }]}>
                संपूर्ण आरती संग्रह
              </Text>
            </View>
            {/* <MyComponent /> */}
            <TouchableOpacity
              onPress={onHanglePress}
              style={{
                flexDirection: "row",
                gap: 20,
                backgroundColor: "#9b2226",
                borderRadius: 10,
                marginHorizontal: 10,
                marginBottom: 20,
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5Irx7cmVx7F6A-r-lSp4piHCfSzmwN-XsWUwcJvWTg&s",
                  }}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View>
                <Text
                  style={[styles.textColor, styles.textBold, { fontSize: 18 }]}
                >
                  संपूर्ण आरती SAngrah
                </Text>
                <Text>Total: 52</Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                gap: 20,
                backgroundColor: "#9b2226",
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5Irx7cmVx7F6A-r-lSp4piHCfSzmwN-XsWUwcJvWTg&s",
                  }}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View>
                <Text
                  style={[styles.textColor, styles.textBold, { fontSize: 18 }]}
                >
                  संपूर्ण चालीसा
                </Text>
                <Text>Total: 52</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 8,
            }}
          >
            <Line text={"व्रत कथा"} />
          </View>

          <View
            style={{
              paddingHorizontal: 8,
            }}
          >
            <Line text="मंत्र" />
          </View>

          <View
            style={{
              paddingHorizontal: 8,
            }}
          >
            <Line text="ज्योतिर्लिंग" />
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
