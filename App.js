import "react-native-gesture-handler"; // Make sure to import this before using React Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import DrawerContent from "./components/DrawerContent";
import ProfileScreen from "./screens/ProfileScreen";
import TestingScreen from "./screens/TestingScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false, // Disable default header
      }}
    />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={HomeStackNavigator} />
      {/* Add more screens here */}
    </Drawer.Navigator>
  );
};

function MyDrawer() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    //     <Drawer.Screen name="Home" component={StackNavigator} />
    //     <Drawer.Screen name="Details" component={DetailsScreen} />
    //     {/* Add more screens here */}
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeStack"
          component={DrawerNavigator}
          options={{
            headerShown: false, // Disable default header
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Testing" component={TestingScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
