import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Share } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { addFav, removeFav } from "../redux/reducers/defaultReducer";
import CustomDialog from "./CustomDialog";

function HeartIcon({ label, navigation, id }) {
  const [visible, setVisible] = useState(false);
  const favourites = useSelector((state) => state?.default?.favourites);
  const godsNames = useSelector((state) => state?.default?.godsNames);

  const dispatch = useDispatch();

  const goBack = () => {
    navigation.goBack();
  };

  function isFavourite() {
    console.log("========= FAvourite =========", favourites);
    if (favourites.length > 0) {
      return favourites.some((favourite) => favourite?.id === id);
    } else {
      return false;
    }
  }

  function toggleFav() {
    if (isFavourite()) {
      dispatch(removeFav({ id }));
    } else {
      dispatch(addFav({ id }));
    }
  }

  function onHandlePressFavIcon() {
    setVisible(true);
  }

  function getRecord() {
    // favourites.find
    console.log(
      "=========== favourites.find(favourite => favourite.id === id) ",
      godsNames.find((favourite) => favourite.id === id)
    );
    return godsNames.find((favourite) => favourite.id === id);
  }

  const onShare = async () => {
    console.log("===== ", getRecord());
    const record = getRecord();

    try {
      const result = await Share.share({
        message: record.lyrics.toString(),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backBtn}>
        <View>
          <FontAwesome name="arrow-left" size={15} />
        </View>
        <View>
          <Text style={styles.headText}>{label}</Text>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", gap: 15 }}>
        <TouchableOpacity onPress={onShare}>
          <FontAwesome name="share" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFav}>
          {isFavourite() ? (
            <FontAwesome name="heart" size={30} color="red" />
          ) : (
            <FontAwesome name="heart-o" size={30} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeartIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
  },
  backBtn: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 20,
  },
  headText: { fontSize: 18, fontWeight: "bold" },
});
