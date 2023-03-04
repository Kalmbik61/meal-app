import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./src/components/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/components/screens/MealsOverviewScreen/MealsOverviewScreen";
import MealDetailsScreen from "./src/components/screens/MealDetailsScreen/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./src/components/screens/FavoritesScreen/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./src/context/favorites.context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawervNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
        name='DrawerCategories'
        component={CategoriesScreen}
      />
      <Drawer.Screen
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
        name='DrawerFavorites'
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='MealsCategories'
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name='MealsCategories'
              component={DrawervNav}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => ({
              //   title: route.params.categoryId,
              // })}
            />
            <Stack.Screen name='MealDetail' component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
