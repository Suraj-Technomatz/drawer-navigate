import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup"; // If you're using validation
import axios from "axios";
import BackgroundImage from "../../components/ImageBackground";
import { BASE_URL } from "../../utils";
const image = require("../../assets/back6.jpg");

export default function SuggestionScreen({ navigation }) {
  const onHandleSubmitForm = (values) => {
    axios
      .post(`${BASE_URL}/v1/suggestion/create`, {
        ...values,
        rating: 5,
      })
      .then((res) => {
        console.log("=====================..>>>>>>>>>>", res.data);
        navigation.navigate("Home Stack");
      })
      .catch((err) => {
        console.log("============= ERROR =========>>>>", err.message);
        console.error(err);
      });
  };

  return (
    // <BackgroundImage source={image}>
    <View style={styles.container}>
      <ScrollView>
        <Formik
          initialValues={{}}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            phone: Yup.string().required("Phone is required"),
            suggestion: Yup.string().required("Suggestion is required"),
          })}
          onSubmit={(values, actions) => {
            onHandleSubmitForm(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Name"
              />
              {errors.name && (
                <Text style={{ color: "red" }}>{errors.name}</Text>
              )}

              <TextInput
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Phone"
              />
              {errors.phone && (
                <Text style={{ color: "red" }}>{errors.phone}</Text>
              )}

              <TextInput
                onChangeText={handleChange("suggestion")}
                onBlur={handleBlur("suggestion")}
                value={values.suggestion}
                placeholder="Suggestion"
                multiline
                numberOfLines={4}
              />
              {errors.suggestion && (
                <Text style={{ color: "red" }}>{errors.suggestion}</Text>
              )}
              <View style={{ marginVertical: 20 }}>
                <Button mode="contained" onPress={handleSubmit}>
                  Submit
                </Button>
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.formContainer}>
          <View style={styles.inputField}></View>
          <View style={styles.inputField}></View>
          <View style={styles.inputField}></View>
        </View>
      </ScrollView>
    </View>
    // </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 150,
    paddingHorizontal: 12,
  },
  formContainer: {
    flex: 1,
  },
  inputField: {},
});
