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

import axios from "axios";
import BackgroundImage from "../../components/ImageBackground";
import { BASE_URL } from "../../utils";
const image = require("../../assets/back6.jpg");

export default function SuggestionScreen({ navigation }) {
  const initForm = { name: "", phone: "", suggestion: "" };
  const [form, setForm] = useState({ ...initForm });

  const onHandleSubmitForm = () => {
    console.log("=========== onHandleSubmitForm =========", form);
    axios
      .post(`${BASE_URL}/v1/suggestion/create`, {
        ...form,
        rating: 5,
      })
      .then((res) => {
        console.log("=====================..>>>>>>>>>>", res.data);
        setForm({ ...initForm });
        navigation.navigate("Home Stack");
      })
      .catch((err) => {
        console.log("============= ERROR =========>>>>", err.message);
        console.error(err);
      });
  };

  const isDisable = () => {
    return !(form.name !== "" && form.phone !== "" && form.suggestion !== "");
  };

  console.log("========== FORM ========", form);
  return (
    // <BackgroundImage source={image}>
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.inputField}>
            <TextInput
              label="Name"
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
              mode="outlined"
              style={{ marginBottom: 20 }}
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              label="Phone"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              mode="outlined"
              style={{ marginBottom: 20 }}
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              label="Suggestion"
              value={form.suggestion}
              onChangeText={(text) => setForm({ ...form, suggestion: text })}
              mode="outlined"
              multiline
              numberOfLines={4} // Set the number of lines to display initially
              style={{ marginBottom: 20 }}
            />
          </View>
          <Button
            disabled={isDisable()}
            mode="contained"
            onPress={onHandleSubmitForm}
          >
            Submit
          </Button>
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
