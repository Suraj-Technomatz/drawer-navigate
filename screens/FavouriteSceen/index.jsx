import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import FavouriteItem from "../../components/FavouriteItem";

function FavouriteSceen({ navigation }) {
  const favourite = useSelector((state) => state.default.favourites);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {favourite.length === 0 && (
          <View style={styles.noFavourite}>
            <Text>You don't have any favourite list yet</Text>
          </View>
        )}
        {favourite.length > 0 && (
          <FlatList
            data={favourite}
            renderItem={({ item }) => (
              <FavouriteItem
                id={item.id}
                title={item.name}
                imageUrl={item.imageUrl}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default FavouriteSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noFavourite: {},
  favouriteList: {},
});
