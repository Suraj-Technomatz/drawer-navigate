import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Share,
} from "react-native";
import * as Sharing from "expo-sharing";
import { Audio } from "expo-av";

import { godsName, chaleesa } from "../../utils/constant";
import BackgroundImage from "../../components/ImageBackground";
import HeartIcon from "../../components/HeartIcon";
import CustomDialog from "../../components/CustomDialog";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { retrieveArray, storeArray, removeData } from "../../utils/storage";

export default function DetailsScreen({ route, navigation }) {
  const { id, pageName } = route.params;
  const aarty = useSelector((state) => state.default.aarty);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/audio/laxmi-maa.mp3")
      );
      setSound(sound);
      setIsPlaying(true);
      await sound.playAsync();
    } catch (error) {
      console.log("Error playing sound: ", error);
    }
  };
  const pauseSound = async () => {
    if (sound !== null) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };
  const stopSound = async () => {
    if (sound !== null) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
  };
  const getData = () => {
    if (pageName === "चालीसा") {
      return chaleesa.filter((god) => god.id === id);
    } else {
      return aarty.filter((god) => god._id === id);
    }
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
      <SafeAreaView style={styles.detailsContainer}>
        {/* <BackgroundImage source={image}> */}
        <HeartIcon id={id} label="आरती" navigation={navigation} />
        <Button onPress={() => (isPlaying ? pauseSound() : playSound())}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button onPress={stopSound}>Stop</Button>
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
        {/* </BackgroundImage> */}
      </SafeAreaView>
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
