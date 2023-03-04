import { View, FlatList, Text } from "react-native";
import styles from "./FavoritesScreen.styles";
import { useContext } from "react";
import { FavoriteContext } from "../../../context/favorites.context";
import MealItem from "../MealsOverviewScreen/MealItem/MealItem";

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          You have no favorites meals yet.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(id) => id}
          renderItem={({ item }) => <MealItem mealId={item} />}
        />
      )}
    </View>
  );
}
