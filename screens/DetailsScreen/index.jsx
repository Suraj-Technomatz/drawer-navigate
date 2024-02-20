import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import * as Sharing from "expo-sharing";

import { godsName } from "../../utils/constant";
import BackgroundImage from "../../components/ImageBackground";
import HeartIcon from "../../components/HeartIcon";
import CustomDialog from "../../components/CustomDialog";
import { Button } from "react-native-paper";

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;

  const getData = () => {
    return godsName.filter((god) => god.id === id);
  };

  const sharePost = async () => {
    try {
      const result = await Sharing.shareAsync(
        "Your message or content to share"
      );
      if (result.action === Sharing.sharedAction) {
        if (result.activityType) {
          // Shared via activity type
          console.log(`Shared via ${result.activityType}`);
        } else {
          // Shared
          console.log("Shared");
        }
      } else if (result.action === Sharing.dismissedAction) {
        // Dismissed
        console.log("Dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  const image = require("../../assets/gradiant.jpg");
  return (
    <>
      {/* <BackgroundImage source={image}> */}
      <SafeAreaView style={styles.detailsContainer}>
        <HeartIcon id={id} label="आरती" navigation={navigation} />
        <View>
          <Button icon="share" mode="contained" onPress={sharePost}>
            Press me
          </Button>
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              {getData().map((god) => {
                return (
                  <View key={god.id}>
                    <View>
                      <Image
                        style={styles.img}
                        source={{
                          uri: god.imageUrl,
                        }}
                      />
                    </View>
                    <View style={styles.godHeadContainer}>
                      <Text style={styles.godHead}>{god.name}</Text>
                    </View>
                    {god.lyrics.map((lyric) => (
                      <View>
                        <Text style={styles.lyric}>{lyric}</Text>
                      </View>
                    ))}
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* </BackgroundImage> */}
    </>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginVertical: 50,
  },
  godHeadContainer: {
    marginVertical: 20,
  },
  godHead: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lyricContainer: {},
  lyric: {
    color: "red",
    fontWeight: "bold",
    paddingVertical: 8,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  img: {
    width: "auto",
    height: 300,
  },
});
