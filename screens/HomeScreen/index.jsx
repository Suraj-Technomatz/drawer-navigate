import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addAarty } from "../../redux/reducers/defaultReducer";
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
import { BASE_URL, chaleesa } from "../../utils";

export default function HomeScreen({ navigation }) {
  const aarty = useSelector((state) => state.default.aarty);

  const image6 = require("../../assets/back6.jpg");
  const dispatch = useDispatch();

  function onHanglePress(pageName) {
    navigation.navigate("सूची", {
      pageName,
    });
  }
  useEffect(() => {
    axios
      .get(`${BASE_URL}/v1/aarti`)
      .then((res) => {
        if (res?.data) {
          dispatch(addAarty(res.data));
        }
      })
      .catch((err) => {
        console.log("=========== ERRRRR ==========", err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <BackgroundImage source={image6}>
        <ScrollView style={{ flex: 1, padding: 5 }}>
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
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={[
                    styles.textColor,
                    styles.textBold,
                    {
                      fontSize: 18,
                    },
                  ]}
                >
                  संपूर्ण आरती SAngrah
                </Text>
                <Text style={styles.count}>Total: {aarty.length}</Text>
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
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={[styles.textColor, styles.textBold, { fontSize: 18 }]}
                >
                  संपूर्ण चालीसा
                </Text>
                <Text style={styles.count}>Total: {chaleesa.length}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* vrat start */}
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
          {/* vrat End */}
          {/* Mantra start */}
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
                <Text style={styles.title}>महाकाली मंत्र</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Mantra End */}
          {/* Jyotirling start */}
          <View
            style={{
              paddingHorizontal: 8,
            }}
          >
            <Line text="ज्योतिर्लिंग" />

            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>सोमनाथ ज्योतिर्लिंग</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}> मल्लिकार्जुन ज्योतिर्लिंग</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>महाकालेश्वर ज्योतिर्लिंग</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>ओंकारेश्वर ज्योतिर्लिंग</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>केदारेश्वर ज्योतिर्लिंग</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>भीमाशंकर ज्योतिर्लिंग</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>विश्वेश्वर ज्योतिर्लिंग</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>त्र्यंबकेश्वर ज्योतिर्लिंग</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.flex}>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>वैद्यनाथ ज्योतिर्लिंग</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>नागेश्वर ज्योतिर्लिंग</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Jyotirling end */}
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
  count: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
