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

import axios from "axios";
import BackgroundImage from "../../components/ImageBackground";
import { BASE_URL } from "../../utils";

export default function SuggestionScreen({ navigation }) {
  const image = require("../../assets/back6.jpg");
  return (
    <View style={styles.container}>
      <BackgroundImage source={image}>
        <ScrollView style={{ flex: 1, padding: 5 }}>
          <View style={{ marginBottom: 30 }}>
            <Text>Suggestion screen</Text>
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
});
