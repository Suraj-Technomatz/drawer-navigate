import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { addFav, removeFav } from "../redux/reducers/defaultReducer";

function HeartIcon({ label, navigation, id }) {
  const favourites = useSelector((state) => state?.default?.favourites);

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

  function onHandlePressFavIcon() {
    if (isFavourite()) {
      dispatch(removeFav({ id }));
    } else {
      dispatch(addFav({ id }));
    }
  }

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

      <TouchableOpacity onPress={onHandlePressFavIcon}>
        {isFavourite() ? (
          <FontAwesome name="heart" size={30} color="red" />
        ) : (
          <FontAwesome name="heart-o" size={30} color="black" />
        )}
      </TouchableOpacity>
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
