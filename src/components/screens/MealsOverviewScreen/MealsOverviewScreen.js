import { useEffect, useLayoutEffect } from "react";
import { FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../../../fakeData/fakeData";
import styles from "./MealsOverviewScreen.styles";
import MealItem from "./MealItem/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter(
    (arr) => arr.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, catId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <MealItem mealId={item.id} />}
      />
    </View>
  );
}
