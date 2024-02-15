import "react-native-gesture-handler"; // Make sure to import this before using React Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
