import { useContext, useLayoutEffect, useState } from "react";
import { Image, Text, ScrollView, View, Button } from "react-native";
import MealDetails from "../../globals/MealDetails/MealDetails";

import styles from "./MealDetailsScreen.styles";
import Subtitle from "../../globals/Subtitle/Subtitle";
import IconButton from "../../globals/IconButton/IconButton";
import { FavoriteContext } from "../../../context/favorites.context";
import { MEALS } from "../../../fakeData/fakeData";

export default function MealDetailsScreen({ route, navigation }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoriteContext);
  const [imgError, setImgError] = useState(false);

  const meal = MEALS.find((m) => m.id === route.params.mealId);
  const favMeal = favorites.includes(meal.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={favMeal ? "star" : undefined}
          onPress={onChangeFavoriteMeal}
        />
      ),
    });
  }, [favMeal, navigation, onChangeFavoriteMeal]);

  const onChangeFavoriteMeal = () => {
    if (favMeal) {
      removeFavorite(meal.id);
    } else {
      addFavorite(meal.id);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: meal.imageUrl }}
        style={[styles.image, imgError && styles.image_error]}
        onError={() => setImgError(true)}
      />

      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detail_text}
      />
      <Subtitle>Ingredients</Subtitle>
      {meal.ingredients.map((item, i) => (
        <View style={styles.step_container}>
          <Text style={[styles.step, { textAlign: "center" }]} key={item}>
            {item}
          </Text>
        </View>
      ))}
      <Subtitle>Steps</Subtitle>
      {meal.steps.map((item, i) => (
        <View style={styles.step_container}>
          <Text style={styles.step} key={item}>
            {i + 1}. {item}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
