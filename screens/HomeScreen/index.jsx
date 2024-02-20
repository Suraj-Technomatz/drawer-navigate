import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";

import BackgroundImage from "../../components/ImageBackground";
import Line from "../../components/Line";

export default function HomeScreen({ navigation }) {
  const image6 = require("../../assets/back6.jpg");

  function onHanglePress(pageName) {
    navigation.navigate("सूची", {
      pageName,
    });
  }
  return (
    <View style={styles.container}>
      <BackgroundImage source={image6}>
        <ScrollView style={{ flex: 1 }}>
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
              onPress={() => onHanglePress("आरती")}
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

            <TouchableOpacity
              onPress={() => onHanglePress("चालीसा")}
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
                    uri: "https://images.news18.com/ibnlive/uploads/2023/04/hanuman-jayanti-2023-date-history-significance-16806333513x2.jpg",
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
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 8,
            }}
          >
            <Line text={"व्रत कथा"} />

            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>पूर्णिमा ब्रत कथाये</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>पूर्णिमा ब्रत कथाये</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 8,
            }}
          >
            <Line text="मंत्र" />

            <View style={styles.flex}>
              <TouchableOpacity style={[styles.titleContainer, { flex: 1 }]}>
                <Text style={styles.title}>गणेश मंत्र</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.flex}>
              <TouchableOpacity style={[styles.titleContainer, { flex: 1 }]}>
                <Text style={styles.title}>गायत्री मंत्र</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.flex}>
              <TouchableOpacity style={[styles.titleContainer, { flex: 1 }]}>
                <Text style={styles.title}>गायत्री मंत्र</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 8,
            }}
          >
            <Line text="ज्योतिर्लिंग" />

            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>एकादशी ब्रत कथाये</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  flex: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15,
  },
  titleContainer: {
    backgroundColor: "#900",
    padding: 8,
  },
  title: {
    fontSize: 16,
    color: "yellow",
  },
});
