import "react-native-gesture-handler"; // Make sure to import this before using React Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

import store from "./redux/store";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import DrawerContent from "./components/DrawerContent";
import FavouriteSceen from "./screens/FavouriteSceen";
import ListingScreen from "./screens/ListingScreen";
import SuggestionScreen from "./screens/SuggestionScreen";

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
  </Stack.Navigator>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="आरती संग्रह" component={HomeStackNavigator} />
      {/* Add more screens here */}
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home Stack"
              component={DrawerNavigator}
              options={{
                headerShown: false, // Disable default header
              }}
            />
            <Stack.Screen
              name="आरती"
              component={DetailsScreen}
              options={{
                headerShown: false, // Disable default header
              }}
            />
            <Stack.Screen name="सूची" component={ListingScreen} />
            <Stack.Screen name="पसंदीदा" component={FavouriteSceen} />
            <Stack.Screen name="suggestion" component={SuggestionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}

export default App;
