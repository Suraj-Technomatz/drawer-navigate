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
import { Avatar, Button, Card } from "react-native-paper";

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

const MyComponent = () => (
  <Card>
    {/* <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      // left={LeftContent}
    /> */}
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
);

export default function HomeScreen({ navigation }) {
  const onHandlePress = (id) => {
    navigation.navigate("आरती", {
      id,
    });
  };

  const image = require("../../assets/gradiant.jpg");
  const image1 = require("../../assets/backred.jpg");
  const image2 = require("../../assets/backre2.jpg");
  const image4 = require("../../assets/back4.jpg");

  return (
    <View style={styles.container}>
      <BackgroundImage source={image1}>
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
            <View
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
            </View>

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

            {/* <FlatList
              data={godsName}
              renderItem={({ item }) => (
                <Item godN={item} onHandlePress={onHandlePress} />
              )}
              keyExtractor={(item) => item.id}
            /> */}
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
