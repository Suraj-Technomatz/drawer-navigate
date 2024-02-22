import AsyncStorage from "@react-native-async-storage/async-storage";
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Data saved successfully");
  } catch (error) {
    console.log("Error saving data:", error);
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Retrieved data:", value);
      return value;
    } else {
      console.log("No data found for the given key");
    }
  } catch (error) {
    console.log("Error retrieving data:", error);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);

    console.log("Data removed successfully");
    return true;
  } catch (error) {
    console.log("Error removing data:", error);
    return false;
  }
};

// Storing an array of strings
export const storeArray = async (key, array) => {
  try {
    const jsonValue = JSON.stringify(array);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("Array stored successfully");
    return true;
  } catch (error) {
    console.log("Error storing array:", error);
    return false;
  }
};

// Retrieving an array of strings
export const retrieveArray = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      const array = JSON.parse(jsonValue);
      console.log("Retrieved array:", array);
      return array;
    } else {
      console.log("No array found for the given key");
      return [];
    }
  } catch (error) {
    console.log("Error retrieving array:", error);
    return null;
  }
};
