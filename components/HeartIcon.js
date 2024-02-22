import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Share } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { addFav, removeFav } from "../redux/reducers/defaultReducer";
import CustomDialog from "./CustomDialog";
import { removeData, retrieveArray, storeArray } from "../utils/storage";

function HeartIcon({ label, navigation, id }) {
  const [visible, setVisible] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const favourites = useSelector((state) => state?.default?.favourites);
  const godsNames = useSelector((state) => state?.default?.godsNames);

  const dispatch = useDispatch();

  async function remove() {
    const ss = await removeData("favourite");
  }

  async function retrive() {
    return await retrieveArray("favourite");
  }

  async function addFav() {
    storeArray("favourite", ["dfdf"]);
  }

  async function removeFromFav() {
    // get favourite values from storage
    const allFavs = await retrieveArray("favourite");
    // remove this ID to fav
    const updatedFavIDs = allFavs.filter((fav) => fav !== id);
    // update storage
    storeArray("favourite", updatedFavIDs);
    setIsFav(false);
  }

  async function addToFav() {
    // get favourite values from storage
    const allFavs = await retrieveArray("favourite");
    // Add this ID to fav
    allFavs.push(id);
    // update storage
    const isSto = await storeArray("favourite", allFavs);
    setIsFav(true);
  }

  useEffect(() => {
    isThisPostInFav();
  }, []);

  async function isThisPostInFav() {
    const allFavs = await retrieveArray("favourite");
    if (allFavs) {
      setIsFav(allFavs.some((fav) => fav === id));
    }
  }

  const goBack = () => {
    navigation.goBack();
  };

  function isFavourite() {
    if (favourites.length > 0) {
      return favourites.some((favourite) => favourite?.id === id);
    } else {
      return false;
    }
  }

  function toggleFav() {
    if (isFav) {
      removeFromFav();
    } else {
      addToFav();
    }
  }

  function onHandlePressFavIcon() {
    setVisible(true);
  }

  function getRecord() {
    return godsNames.find((favourite) => favourite.id === id);
  }

  const onShare = async () => {
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
          {isFav ? (
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
