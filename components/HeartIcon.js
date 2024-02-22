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
    console.log("========== All Fav3 =========", allFavs);
    // remove this ID to fav
    const updatedFavIDs = allFavs.filter((fav) => fav !== id);
    console.log("========== All Fav 4=========", allFavs);
    // update storage

    storeArray("favourite", updatedFavIDs);
    setIsFav(false);
  }

  async function addToFav() {
    // get favourite values from storage
    const allFavs = await retrieveArray("favourite");
    console.log("========== All Fav =========", allFavs);
    // Add this ID to fav
    allFavs.push(id);
    console.log("========== All Fav 2 =========", allFavs);
    // update storage
    const isSto = await storeArray("favourite", allFavs);
    console.log("========== All Fav 3 =========", allFavs);
    setIsFav(true);
  }

  useEffect(() => {
    console.log("=========== useEffect ===========");
    isThisPostInFav();
  }, []);

  async function isThisPostInFav() {
    const allFavs = await retrieveArray("favourite");
    console.log("=========== isThisPostInFav ========", allFavs);
    console.log("=========== isThisPostInFav ========", id);
    if (allFavs) {
      setIsFav(allFavs.some((fav) => fav === id));
    }
  }

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
    if (isFav) {
      // dispatch(removeFav({ id }));
      console.log("======== FAV remove ========");
      removeFromFav();
    } else {
      console.log("======== FAV Add ========");
      // dispatch(addFav({ id }));
      addToFav();
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
  console.log("=============== IS FAV ====", isFav);

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
